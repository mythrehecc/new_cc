from dotenv import load_dotenv
import os
from datetime import timedelta


load_dotenv()  # Load variables from .env file

# Configs
POSTGRES_URI = os.getenv("POSTGRES_URI")
EMAIL_SENDER = os.getenv("EMAIL_SENDER")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT"))
