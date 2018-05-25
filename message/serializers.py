from rest_framework import serializers
from message.models import Message
from chat.models import Chat
from core.serializers import UserShortSerializer
from chat.serializers import ChatShortSerializer


class MessageSerializer(serializers.ModelSerializer):

    author = UserShortSerializer(read_only=True)
    chat = ChatShortSerializer(read_only=True)
    chat_id = serializers.PrimaryKeyRelatedField(
        queryset=Chat.objects.all(), write_only=True, source='chat', required=True
    )
    class Meta:
        model = Message
        fields = ('text', 'author', 'chat', 'chat_id', 'created_at')

