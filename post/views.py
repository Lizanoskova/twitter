from __future__ import unicode_literals
from rest_framework import permissions
from core.permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from post.models import Post
from post.serializers import PostSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class PostViewSet(viewsets.ModelViewSet):

    serializer_class = PostSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    queryset = Post.objects.select_related(
        'author', 'blog__author',
    ).order_by('-created_at')
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('author', 'blog', )

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


