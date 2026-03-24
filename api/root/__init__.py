from datetime import timedelta

from flask import Flask, app, json, jsonify, request
from flask_jwt_extended import JWTManager
from flask_restful import Api
from flask_cors import CORS

# from root.config import G_SECRET_KEY, WEB_URL
from root.db.db import postgres

api = Api()
jwt = JWTManager()


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    # app.secret_key = G_SECRET_KEY
    CORS(app)
    postgres.init_app()
    jwt.init_app(app)
    from root.db import db_bp

    app.register_blueprint(db_bp)
    from root.auth import auth_bp

    app.register_blueprint(auth_bp)
    app.permanent_session_lifetime = timedelta(minutes=60)
    # initialize_firebase()

    @app.route("/")  # root URL
    def home():
       return "Backend is live!"

    @app.route("/api/health")  # optional API test
    def health():
        return {"status": "ok"}

    return app
