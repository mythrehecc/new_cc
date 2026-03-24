from .models import *
from . import auth_api

auth_api.add_resource(GetConfig, "/get/auth/config")
auth_api.add_resource(SaveConfig, "/save/auth/config")
auth_api.add_resource(AuthenticateAdmin, "/auth/admin")
