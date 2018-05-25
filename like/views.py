# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from like.models import Like
from like.serializers import LikeSerializer
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.

class LikeViewSet(viewsets.ModelViewSet):

    serializer_class = LikeSerializer
    queryset = Like.objects.select_related(
        'author', 'content_type',
    )
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('author', 'content_type', 'object_id')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

