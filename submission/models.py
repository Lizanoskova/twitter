
# -*- coding: utf-8 -*-
from django.db import models
from core.models import EventableMixin, AuthoredMixin, BaseModel, User
from django.contrib.contenttypes.fields import GenericRelation

class Submission(AuthoredMixin, EventableMixin,BaseModel):

    user = models.ForeignKey('core.User', related_name='users')


    def get_event_title(self):

        return 'User %s submissioned user %s' % (self.author,  self.user.get_username())

    def get_author(self):

        return self.author








# Create your models here.