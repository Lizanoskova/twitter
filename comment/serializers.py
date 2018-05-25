from rest_framework import serializers
from post.models import Post
from comment.models import Comment
from django.contrib.contenttypes.models import ContentType
from core.serializers import UserShortSerializer
from post.serializers import PostSerializer



class CommentableObjectRelatedField(serializers.RelatedField):

    def to_representation(self, value):

        if isinstance(value, Post):
            serializer = PostSerializer(value)

        else:
            return value.__str__()

        return serializer.data


class CommentSerializer(serializers.ModelSerializer):
    author = UserShortSerializer(read_only=True)
    content_type = serializers.SlugRelatedField(queryset=ContentType.objects.all(), slug_field='model')
    #content_object = CommentableObjectRelatedField(read_only=True)

    class Meta:
        model = Comment
        fields = ('author', 'content_type', 'object_id')



