from datetime import datetime
from email.message import EmailMessage
import random
import smtplib
import uuid
import bcrypt
from flask import request
from root.config import EMAIL_PASSWORD, EMAIL_SENDER, SMTP_PORT, SMTP_SERVER
from root.email import send_wishlist_welcome_email
from flask_restful import Resource
from root.common import Status
from root.db.dbHelper import DBHelper


class GetConfig(Resource):
    def get(self):
        hubs = DBHelper.find_all(
            table_name="site_config",
            select_fields=[
                "id",
                "config_json",
            ],
            filters={"id": 1},
        )

        return {"status": 1, "payload": {"config": hubs[0]["config_json"]}}


class SaveConfig(Resource):
    def post(self):
        data = request.get_json()
        config = data.get("config")
        if not config:
            return {"status": 0, "message": "Invalid config"}, 400

        # Save the config to the database
        DBHelper.update(
            table_name="site_config",
            update_fields={"config_json": config},
            filters={"id": 1},
        )
        return {"status": 1, "message": "Config saved successfully"}


def is_otp_valid(otpData, otp):

    if int(otpData) != int(otp):
        return {
            "status": 0,
            "class": "error",
            "message": "Oops! That OTP doesn't match. Double-check and try again!",
            "payload": {},
        }

    return {
        "status": 1,
        "class": "success",
        "message": "OTP verified!",
        "payload": {},
    }


class AuthenticateAdmin(Resource):
    def post(self):
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            return {"status": 0, "message": "Username and password are required"}, 400

        try:
            # Fetch admin from DB (assuming stored password is hashed)
            admin = DBHelper.find_one(
                table_name="admin_users",
                filters={"user_name": username},
                select_fields=["id", "user_name", "password"],
            )
            # if admin:
            #     stored_hashed_password = admin["password"].encode("utf-8")
            #     print(f"stored_hashed_password: {stored_hashed_password}")

            #     # Check password
            #     if bcrypt.checkpw(password.encode("utf-8"), stored_hashed_password):
            #         return {"status": 1, "message": "Authentication successful"}
            #     else:
            #         return {"status": 0, "message": "Invalid credentials"}, 401
            # else:
            #     return {"status": 0, "message": "Invalid credentials"}, 401
            if admin:
                if password == admin["password"]:
                    return {"status": 1, "message": "Authentication successful"}
                else:
                    return {"status": 0, "message": "Invalid credentials"}, 401
            else:
                return {"status": 0, "message": "Invalid credentials"}, 401


        except Exception as e:
            return {"status": 0, "message": "Authentication failed"}, 500


