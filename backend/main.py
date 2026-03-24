from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine
from models import Base
from routers import contact, projects

Base.metadata.create_all(bind=engine)

app = FastAPI(title="CrestCode API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router, prefix="/api/contact", tags=["contact"])
app.include_router(projects.router, prefix="/api/projects", tags=["projects"])

@app.get("/")
async def root():
    return {"message": "CrestCode API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
