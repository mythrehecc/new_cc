# from .createTables import CreateTables
from .createTables import CreateTables
from . import db_api
from ..contact import ContactForm
from ..careers import CareerForm

db_api.add_resource(CreateTables, "/create-tables")
db_api.add_resource(ContactForm, "/contact")
db_api.add_resource(CareerForm, "/careers")
