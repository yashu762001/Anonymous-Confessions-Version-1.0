from rest_framework import serializers
from ..models import Confession, Comment


class ConfessionSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=300, default="")
    college = serializers.CharField(max_length=600, default="")
    gender = serializers.CharField(max_length=700, default="")
    confession = serializers.CharField(max_length=2500, default="")
    post_likes = serializers.IntegerField(default=0)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Confession.objects.create(**validated_data)

