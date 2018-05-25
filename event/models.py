# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from core.models import AuthoredMixin, TitledMixin, BaseModel
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

from django.db import models


class Event(TitledMixin, AuthoredMixin, BaseModel):

    object_id = models.PositiveIntegerField()
    content_type = models.ForeignKey(ContentType)
    object = GenericForeignKey()
    #subject_id = models.PositiveIntegerField()
    #subject_content_type = models.ForeignKey(ContentType)
    # subject = GenericForeignKey()

# Create your models here.
