# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from core.models import PublicationMixin, AuthoredMixin, BaseModel, EventableMixin, CommentableMixin, LikableMixin, CategorizableMixin

class Post(PublicationMixin,AuthoredMixin,BaseModel, CommentableMixin, LikableMixin, EventableMixin, CategorizableMixin):

    blog = models.ForeignKey('blog.Blog', related_name='posts')

    def get_event_title(self):

        return '%s posted smth ' % (self.author)

    def get_author(self):

        return self.author

# Create your models here.
