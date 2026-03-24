from flask import request, jsonify
from flask_restful import Resource
from werkzeug.utils import secure_filename
import os

from root.db.db import postgres

UPLOAD_FOLDER = 'uploads/resumes'
ALLOWED_EXTENSIONS = {'pdf', 'doc', 'docx'}

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

class CareerForm(Resource):
    def post(self):
        try:
            if not postgres.connection_pool:
                postgres.init_app()

            if 'resume' not in request.files:
                return {'error': 'No resume file part'}, 400
            
            file = request.files['resume']
            name = request.form.get('name')
            email = request.form.get('email')

            if not name or not email:
                return {'error': 'Name and email are required'}, 400

            if file.filename == '':
                return {'error': 'No selected file'}, 400

            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                filepath = os.path.join(UPLOAD_FOLDER, filename)
                file.save(filepath)

                conn = postgres.get_connection()
                cur = conn.cursor()

                insert_query = """
                INSERT INTO job_applications (name, email, resume_path)
                VALUES (%s, %s, %s)
                RETURNING id;
                """
                cur.execute(insert_query, (name, email, filepath))
                submission_id = cur.fetchone()[0]
                conn.commit()

                cur.close()
                postgres.release_connection(conn)

                return {
                    'success': True,
                    'message': 'Application submitted successfully',
                    'submission_id': submission_id
                }, 200
            else:
                return {'error': 'File type not allowed'}, 400

        except Exception as e:
            print(f"Error in career form submission: {str(e)}")
            return {'error': f'Internal server error: {str(e)}'}, 500
