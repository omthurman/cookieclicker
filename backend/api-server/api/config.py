# -*- encoding: utf-8 -*-


import os
from datetime import timedelta

BASE_DIR = os.path.dirname(os.path.realpath(__file__))


class BaseConfig():

    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'apidata.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "tempkey"
    JWT_SECRET_KEY = "tempkey"
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
