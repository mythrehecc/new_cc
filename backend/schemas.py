from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: datetime
    is_processed: bool
    
    class Config:
        from_attributes = True

class ProjectCreate(BaseModel):
    title: str
    description: Optional[str] = None
    client_name: str
    client_email: EmailStr
    budget: Optional[str] = None
    timeline: Optional[str] = None

class ProjectResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    client_name: str
    client_email: str
    budget: Optional[str]
    timeline: Optional[str]
    status: str
    created_at: datetime
    
    class Config:
        from_attributes = True
