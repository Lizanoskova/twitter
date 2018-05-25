from rest_framework import serializers
from chat.models import Chat
from core.models import User
from core.serializers import UserShortSerializer


class ChatSerializer(serializers.ModelSerializer):

    user_1 = UserShortSerializer(read_only=True)
    user_2 = UserShortSerializer(read_only=True)
    user_1_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True, source='user_1', required=True
    )
    user_2_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True, source='user_2', required=True
    )
    class Meta:
        model = Chat
        fields = ('user_1', 'user_2', 'messages_count', 'user_1_id', 'user_2_id', 'created_at')



class ChatShortSerializer(serializers.ModelSerializer):

    user_1 = UserShortSerializer(read_only=True)
    user_2 = UserShortSerializer(read_only=True)

    class Meta:
        model = Chat
        fields = ('user_1', 'user_2')

