# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings
from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericRelation
from django.contrib.auth.models import AbstractUser


# Create your models here.



class BaseModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        abstract = True



class TitledMixin(models.Model):

    title = models.CharField(max_length=255,verbose_name='Title')

    class Meta:
        abstract = True

class AuthoredMixin(models.Model):

    author = models.ForeignKey(settings.AUTH_USER_MODEL)

    class Meta:
        abstract = True


class PublicationMixin(models.Model):

    text = models.TextField()

    class Meta:
        abstract = True

class LikableMixin(models.Model):

    like = GenericRelation('like.Like')
    likes_count = models.IntegerField(default=0)

    class Meta:
        abstract = True

class CommentableMixin(models.Model):

    comment = GenericRelation('comment.Comment')
    comments_count = models.IntegerField(default=0)

    class Meta:
        abstract = True

class PostMakingMixin(models.Model):

    posts_count = models.IntegerField(default=0)

    class Meta:
        abstract = True

class CategorizableMixin(models.Model):

    category = GenericRelation('category.Category')
    categories_count = models.IntegerField(default=0)

    class Meta:
        abstract = True


class EventableMixin(models.Model):

    event = GenericRelation('event.Event')

    def get_event_title(self):
        raise NotImplementedError

    def get_author(self):
        raise NotImplementedError

    class Meta:
        abstract = True


class SubmissionedMixin(models.Model):

    submission = GenericRelation('submission.Submission')
    submissions_count = models.IntegerField(default=0)

    class Meta:
        abstract = True


class User(AbstractUser, SubmissionedMixin):

    def get_username(self):

        return self.username

