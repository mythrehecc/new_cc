from root.db.db import postgres

def drop_contact_table():
    conn = None
    cur = None
    try:
        if not postgres.connection_pool:
            postgres.init_app()
        
        conn = postgres.get_connection()
        cur = conn.cursor()
        
        cur.execute("DROP TABLE IF EXISTS contact_submissions;")
        conn.commit()
        print("✅ Table 'contact_submissions' dropped successfully.")
        
    except Exception as e:
        print(f"❌ An error occurred: {e}")
    finally:
        if cur:
            cur.close()
        if conn:
            postgres.release_connection(conn)

if __name__ == '__main__':
    drop_contact_table()
