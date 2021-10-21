from rest_framework import serializers
from users.models import User as UserModel


# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id', 'username', 'email')


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id', 'username', 'password', 'email')


class LoginUserSerializer(serializers.ModelSerializer):
    pass
