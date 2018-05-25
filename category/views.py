# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from category.serializers import CategorySerializer
from category.models import Category
from django_filters.rest_framework import DjangoFilterBackend

from django.shortcuts import render

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('content_type',)

    #permission_classes = (permissions.IsAuthenticated)




# Create your views here.

