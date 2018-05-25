# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from core.models import BaseModel

class Chat(BaseModel):

    user_1 = models.ForeignKey('core.User', related_name='users_1')
    user_2 = models.ForeignKey('core.User', related_name='users_2')
    messages_count = models.IntegerField(default=0)



# Create your models here.
