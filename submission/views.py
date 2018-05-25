# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from submission.models import Submission
from submission.serializers import SubmissionSerializer
from django_filters.rest_framework import DjangoFilterBackend




class SubmissionViewSet(viewsets.ModelViewSet):
    serializer_class = SubmissionSerializer
   # queryset = Submission.objects.all()
    queryset = Submission.objects.select_related(
        'author', 'user',
    )
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('author', 'user',)


    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

# Create your views here.
