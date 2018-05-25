from rest_framework import serializers
from like.models import Like
from post.models import Post
from comment.models import Comment
from django.contrib.contenttypes.models import ContentType
from core.serializers import UserShortSerializer
from post.serializers import PostSerializer
from comment.serializers import CommentSerializer

class LikableObjectRelatedField(serializers.RelatedField):

    def to_representation(self, value):

        if isinstance(value, Post):
            serializer = PostSerializer(value)
        elif isinstance(value, Comment):
            serializer = CommentSerializer(value)
        else:
            return value.__str__()

        return serializer.data

class LikeSerializer(serializers.ModelSerializer):

    author = UserShortSerializer(read_only=True)
    content_type = serializers.SlugRelatedField(queryset=ContentType.objects.all(), slug_field='model')
    #object = LikableObjectRelatedField(read_only=True)
    class Meta:
        model = Like
        fields = ('author', 'content_type', 'object_id')


