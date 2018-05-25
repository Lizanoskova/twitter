# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
from core.models import User
from core.serializers import UserSerializer
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required
def home(request):
    return render(request, 'core/home.html')


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)



