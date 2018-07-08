# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from event.models import Event
from event.serializers import EventSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


# Create your views here.

class EventViewSet(viewsets.ModelViewSet):

    serializer_class = EventSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    queryset = Event.objects.all().order_by('-created_at')
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('author','object_id', 'content_type')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
