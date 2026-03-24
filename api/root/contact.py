from flask import request, jsonify
from flask_restful import Resource
from datetime import datetime
from werkzeug.utils import secure_filename
import os
import traceback

from root.db.db import postgres

UPLOAD_FOLDER = 'uploads/attachments'
ALLOWED_EXTENSIONS = {'pdf', 'doc', 'docx', 'jpg', 'png', 'jpeg'}

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

class ContactForm(Resource):
    def post(self):
        try:
            # Initialize connection if not already done
            if not postgres.connection_pool:
                postgres.init_app()
            
            # Get form data
            name = request.form.get('name')
            email = request.form.get('email')
            message = request.form.get('message')

            if not name or not email or not message:
                return {'error': 'Name, email, and message are required'}, 400

            attachment_path = None
            if 'attachment' in request.files:
                file = request.files['attachment']
                if file and file.filename and allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    attachment_path = os.path.join(UPLOAD_FOLDER, filename)
                    file.save(attachment_path)

            conn = postgres.get_connection()
            cur = conn.cursor()

            insert_query = """
            INSERT INTO contact_submissions (name, email, message, attachment_path)
            VALUES (%s, %s, %s, %s)
            RETURNING id;
            """
            cur.execute(insert_query, (name, email, message, attachment_path))
            
            # Get the inserted ID
            submission_id = cur.fetchone()[0]
            
            conn.commit()
            
            return {
                'success': True,
                'message': 'Contact form submitted successfully',
                'submission_id': submission_id,
                'data': {
                    'name': name,
                    'email': email,
                    'message': message,
                    'timestamp': datetime.now().isoformat()
                }
            }, 200
            
        except Exception as e:
            # Print the full traceback to the console
            print("--- EXCEPTION TRACEBACK ---")
            traceback.print_exc()
            print("---------------------------")
            print(f"Error in contact form submission: {str(e)}")
            return {'error': f'Internal server error: {str(e)}'}, 500
            
        finally:
            if 'cur' in locals():
                cur.close()
            if 'conn' in locals():
                postgres.release_connection(conn)
    
    def get(self):
        try:
            # Initialize connection if not already done
            if not postgres.connection_pool:
                postgres.init_app()
            
            conn = postgres.get_connection()
            cur = conn.cursor()
            
            # Check if table exists
            cur.execute("""
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_name = 'contact_submissions'
            );
            """)
            
            table_exists = cur.fetchone()[0]
            
            if not table_exists:
                return {'message': 'No contact submissions found', 'submissions': []}, 200
            
            # Get all contact submissions
            cur.execute("""
            SELECT id, name, email, message, timestamp, status
            FROM contact_submissions 
            ORDER BY timestamp DESC;
            """)
            
            submissions = cur.fetchall()
            
            # Convert to list of dictionaries
            submissions_list = []
            for submission in submissions:
                submissions_list.append({
                    'id': submission[0],
                    'name': submission[1],
                    'email': submission[2],
                    'message': submission[3],
                    'timestamp': submission[4].isoformat() if submission[4] else None,
                    'status': submission[5]
                })
            
            return {
                'success': True,
                'message': f'Found {len(submissions_list)} contact submissions',
                'submissions': submissions_list
            }, 200
            
        except Exception as e:
            print(f"Error fetching contact submissions: {str(e)}")
            return {'error': f'Internal server error: {str(e)}'}, 500
            
        finally:
            if 'cur' in locals():
                cur.close()
            if 'conn' in locals():
                postgres.release_connection(conn)
