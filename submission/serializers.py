from rest_framework import serializers
from submission.models import Submission
from core.serializers import UserSerializer
from core.models import User

class SubmissionSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True, source='user', required=True
    )

    class Meta:
        model = Submission
        fields = ('author','user','user_id')


