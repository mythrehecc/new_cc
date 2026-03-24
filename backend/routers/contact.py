from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Contact
from schemas import ContactCreate, ContactResponse
from typing import List

router = APIRouter()

@router.post("/", response_model=ContactResponse)
async def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    db_contact = Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

@router.get("/", response_model=List[ContactResponse])
async def get_contacts(db: Session = Depends(get_db)):
    contacts = db.query(Contact).all()
    return contacts

@router.get("/{contact_id}", response_model=ContactResponse)
async def get_contact(contact_id: int, db: Session = Depends(get_db)):
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if contact is None:
        raise HTTPException(status_code=404, detail="Contact not found")
    return contact

@router.put("/{contact_id}/processed")
async def mark_contact_processed(contact_id: int, db: Session = Depends(get_db)):
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if contact is None:
        raise HTTPException(status_code=404, detail="Contact not found")
    contact.is_processed = True
    db.commit()
    return {"message": "Contact marked as processed"}
