# -*- coding: utf-8 -*-
from django.db import models
from core.models import EventableMixin, AuthoredMixin, PublicationMixin, TitledMixin, BaseModel, PostMakingMixin
from django.contrib.contenttypes.fields import GenericRelation

class Blog(PublicationMixin,AuthoredMixin,TitledMixin,EventableMixin,BaseModel, PostMakingMixin):


    def get_event_title(self):

        return '%s created new blog ' % (self.author)

    def get_author(self):

        return self.author

    def get_title(self):

        return self.title

# Create your models here.