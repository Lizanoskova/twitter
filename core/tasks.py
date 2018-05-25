# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from twitter.celery import app
from .helpers import send_mail
from .models import User


@app.task
def send_activation_email(user_id):

    user = User.objects.get(id=user_id)
    
    send_mail('activation', 'from@mail.ru', [user.email, ],
       context={'user':user},
    )


@app.task
def test():
  return True