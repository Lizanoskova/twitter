from rest_framework import serializers
from blog.models import Blog
from core.serializers import UserShortSerializer


class BlogSerializer(serializers.ModelSerializer):

    author = UserShortSerializer(read_only=True)

    class Meta:
        model = Blog
        fields = ('author', 'created_at', 'text', 'title')

class BlogForPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ('title',)

