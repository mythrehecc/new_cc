from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import contact, projects, careers

app = FastAPI(title="CrestCode API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router, prefix="/api/contact", tags=["contact"])
app.include_router(projects.router, prefix="/api/projects", tags=["projects"])
app.include_router(careers.router, prefix="/api/careers", tags=["careers"])

@app.get("/")
async def root():
    return {"message": "CrestCode API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
