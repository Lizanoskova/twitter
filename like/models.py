# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from core.models import AuthoredMixin, BaseModel, EventableMixin, LikableMixin


class Like(AuthoredMixin, EventableMixin, BaseModel):

    object_id = models.PositiveIntegerField()
    content_type = models.ForeignKey(ContentType)
    object = GenericForeignKey()


    def get_event_title(self):

        return '%s like %s by %s' % (self.author, self.object, self.object.get_author())

    def get_author(self):

        return self.author

# Create your models here.
