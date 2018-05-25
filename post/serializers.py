from rest_framework import serializers
from blog.serializers import BlogForPostSerializer
from post.models import Post
from blog.models import Blog
from core.serializers import UserShortSerializer

class PostSerializer(serializers.ModelSerializer):

    author = UserShortSerializer(read_only=True)
    blog = BlogForPostSerializer(read_only=True)
    blog_id = serializers.PrimaryKeyRelatedField(
        queryset=Blog.objects.all(), write_only=True, source='blog', required=True
    )

    class Meta:
        model = Post
        fields = ('author', 'created_at', 'text', 'blog', 'blog_id', 'id')


