# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from core.models import PublicationMixin, AuthoredMixin, BaseModel, EventableMixin

class Message(PublicationMixin,AuthoredMixin,BaseModel, EventableMixin):

    chat = models.ForeignKey('chat.Chat', related_name='messages')


    def get_author(self):

        return self.author

# Create your models here.
