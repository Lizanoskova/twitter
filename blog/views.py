# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from post.models import Post
from blog.models import Blog
from blog.serializers import BlogSerializer
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.


class BlogViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('author',)


    def perform_create(self, serializer):
        serializer.save(author=self.request.user)