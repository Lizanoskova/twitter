# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from core.models import TitledMixin, EventableMixin, BaseModel, AuthoredMixin
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

class Category(TitledMixin,  BaseModel):


    content_type = models.ForeignKey(ContentType)


    def get_title(self):

        return self.title



# Create your models here.
