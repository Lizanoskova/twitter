# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from message.models import Message
from message.serializers import MessageSerializer
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('chat', )

    def perform_create(self, serializer):

        serializer.save(author=self.request.user)