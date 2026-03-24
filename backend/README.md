# CrestCode Backend Setup

This backend is built with FastAPI and PostgreSQL.

## Setup Instructions

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Database Setup
- Install PostgreSQL on your system
- Create a database named `crestcode`
- Copy `.env.example` to `.env` and update with your database credentials

### 3. Run Database Migrations
```bash
# Create tables (for development)
python -c "from database import engine; from models import Base; Base.metadata.create_all(bind=engine)"
```

### 4. Start the Server
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## API Endpoints

### Contact Form
- `POST /api/contact/` - Create new contact
- `GET /api/contact/` - Get all contacts
- `GET /api/contact/{id}` - Get specific contact
- `PUT /api/contact/{id}/processed` - Mark contact as processed

### Projects
- `POST /api/projects/` - Create new project
- `GET /api/projects/` - Get all projects
- `GET /api/projects/{id}` - Get specific project
- `PUT /api/projects/{id}/status` - Update project status

## Database Schema

### Contacts Table
- id (Primary Key)
- name (String)
- email (String)
- message (Text)
- created_at (DateTime)
- is_processed (Boolean)

### Projects Table
- id (Primary Key)
- title (String)
- description (Text)
- client_name (String)
- client_email (String)
- budget (String)
- timeline (String)
- status (String)
- created_at (DateTime)
