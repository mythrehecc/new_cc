from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from fastapi.responses import JSONResponse
import os
import uuid
from typing import Optional

router = APIRouter()

# Create uploads directory if it doesn't exist
UPLOAD_DIR = "uploads/resumes"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/")
async def submit_career_form(
    name: str = Form(...),
    email: str = Form(...),
    resume: UploadFile = File(...)
):
    try:
        # Validate file type
        allowed_types = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
        if resume.content_type not in allowed_types:
            raise HTTPException(
                status_code=400, 
                detail="Invalid file type. Only PDF and Word documents are allowed."
            )
        
        # Generate unique filename
        file_extension = resume.filename.split(".")[-1] if "." in resume.filename else "pdf"
        unique_filename = f"{uuid.uuid4()}.{file_extension}"
        file_path = os.path.join(UPLOAD_DIR, unique_filename)
        
        # Save file
        with open(file_path, "wb") as buffer:
            content = await resume.read()
            buffer.write(content)
        
        # Here you would typically save to database
        # For now, we'll just return success
        application_data = {
            "id": str(uuid.uuid4()),
            "name": name,
            "email": email,
            "resume_filename": unique_filename,
            "original_filename": resume.filename,
            "status": "received"
        }
        
        return JSONResponse(
            status_code=200,
            content={
                "success": True,
                "message": "Application submitted successfully!",
                "data": application_data
            }
        )
        
    except HTTPException:
        raise
    except Exception as e:
        # Clean up file if error occurred
        if 'file_path' in locals() and os.path.exists(file_path):
            os.remove(file_path)
        
        raise HTTPException(
            status_code=500,
            detail=f"Failed to process application: {str(e)}"
        )
