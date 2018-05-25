from rest_framework import serializers
from like.models import Like
from post.models import Post
from blog.models import Blog
from message.models import Message
from submission.models import Submission
from comment.models import Comment
from django.contrib.contenttypes.models import ContentType
from core.serializers import UserShortSerializer
from blog.serializers import BlogSerializer
from post.serializers import PostSerializer
from comment.serializers import CommentSerializer
from like.serializers import LikeSerializer
from submission.serializers import SubmissionSerializer
from message.serializers import MessageSerializer

class EventableObjectRelatedField(serializers.RelatedField):

    def to_representation(self, value):

        if isinstance(value, Post):
            serializer = PostSerializer(value)
        elif isinstance(value, Comment):
            serializer = CommentSerializer(value)
        elif isinstance(value, Like):
            serializer = LikeSerializer(value)
        elif isinstance(value, Blog):
            serializer = BlogSerializer(value)
        elif isinstance(value, Submission):
            serializer = SubmissionSerializer(value)
        elif isinstance(value, Message):
            serializer = MessageSerializer(value)
        else:
            return value.__str__()

        return serializer.data

class EventSerializer(serializers.ModelSerializer):

    author = UserShortSerializer(read_only=True)
    content_type = serializers.SlugRelatedField(queryset=ContentType.objects.all(), slug_field='model')
    object = EventableObjectRelatedField(read_only=True)
    #object_id = EventableObjectRelatedField(read_only=True)

    class Meta:
        model = Like
        fields = ('author', 'content_type', 'object', 'object_id')


