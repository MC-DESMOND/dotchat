from flask import Flask, render_template , jsonify, make_response, request, Blueprint, url_for
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, current_user, login_required


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'rghjm,mhngbfvdgfhj'
db = SQLAlchemy(app)
manager = LoginManager(app)
manager.login_view = "auth.login"


from .models import User
@manager.user_loader
def UserGet(user_id):
    return User.query.get(user_id)

CORS(
        app,
        allow_headers=['Content-Type', 'Authorization'],
        supports_credentials=True,
        origins=["*"],
        methods=["GET", "POST", "PUT", "DELETE"]
     )

from views import views
from auth import auth

app.register_blueprint(views)
app.register_blueprint(auth)

