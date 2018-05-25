# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from comment.models import Comment
from comment.serializers import CommentSerializer
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.

class CommentViewSet(viewsets.ModelViewSet):

    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    queryset = Comment.objects.select_related(
        'author', 'content_type',
    )
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('author', 'content_type', 'object_id')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)



