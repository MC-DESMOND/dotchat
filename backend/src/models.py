from flask_login import UserMixin
from sqlalchemy import Column, String, Integer, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from main import db

class User(UserMixin, db.Model):
    id = Column(Integer, primary_key=True)
    username = Column(String(150), unique=True)
    password = Column(String(150), unique=True)
    public_id = Column(String(150), unique=True)
    email = Column(String(150), unique=True)
    view_only = Column(Boolean,default = False)
    first_name = Column(String(50), nullable=True)
    last_name = Column(String(50), nullable=True)
    is_active = Column(Boolean, default=True)
    is_staff = Column(Boolean, default=False)
    is_superuser = Column(Boolean, default=False)
    date_joined = Column(String, default=db.func.current_timestamp())
    # Relationship to Employee
    employees = relationship('Employee', back_populates='user')

    def __str__(self):
        return self.username

class Employee(UserMixin,db.Model):
    id = Column(Integer, primary_key=True)
    employee_id = Column(String(150), unique=True)
    first_name = Column(String(50))
    last_name = Column(String(50))
    email = Column(String(200), unique=True)
    is_emp = Column(Boolean,default = True)
    phone_number = Column(String(15), nullable=True)
    hire_date = Column(String(40), default=db.func.current_timestamp())
    bonus = Column(Integer, nullable=True, default=0)
    salary = Column(Integer, nullable=True, default=0)
    user_id = Column(Integer, ForeignKey('user.id'))  # Foreign key to User
    user = relationship('User', back_populates='employees')

    def __str__(self):
        return f"{self.first_name} {self.last_name}"