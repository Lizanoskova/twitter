# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from core.models import EventableMixin, AuthoredMixin, PublicationMixin, BaseModel, LikableMixin
from django.db import models

class Comment(AuthoredMixin, EventableMixin, PublicationMixin, LikableMixin, BaseModel):

    object_id = models.PositiveIntegerField()
    content_type = models.ForeignKey(ContentType)
    content_object = GenericForeignKey()


    def get_event_title(self):

        return '%s commented %s by %s' % (self.author, self.content_object, self.content_object.get_author())


    def get_author(self):

        return self.author


# Create your models here.
