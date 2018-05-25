# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from event.models import Event
from event.serializers import EventSerializer
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.

class EventViewSet(viewsets.ModelViewSet):

    serializer_class = EventSerializer
    queryset = Event.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('author','object_id', 'content_type')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
