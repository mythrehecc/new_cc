from flask import Blueprint
from flask_restful import Api


auth_bp = Blueprint("auth", __name__, url_prefix="/server/api")
auth_api = Api(auth_bp)

from . import __routes__
