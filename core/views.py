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
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


# @login_required
# def home(request):
#     return render(request, 'core/home.html')


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)

class SessionUserViewSet(viewsets.ViewSet):
    # queryset = User.objects.all()
    # serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    # def list(self, request):
    #     queryset = User.objects.all().filter(id=self.request.user.id)
    #     serializer = UserSerializer(queryset, many=True)
    #     return Response(serializer.data)
    def list(self, request):
        if request.method == 'GET':
            queryset = User.objects.filter(id=request.user.id).first()
            serializer = UserSerializer(self.request.user)
            return Response(serializer.data)
        return HttpResponse(status=404)


