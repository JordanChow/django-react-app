from django.http.response import Http404

from .serializers import LoginUserSerializer, UserSerializer as UserModelSerializer
from .serializers import RegisterUserSerializer
from users.models import User as UserModel

from rest_framework import status, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from knox.models import AuthToken


# Get list of all users (get all)
class GetAllUsers(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserModel.objects.all()
    serializer_class = UserModelSerializer


# Register a new user (create)
class RegisterUser(generics.GenericAPIView):
    serializer_class = RegisterUserSerializer

    def post(self, request, format=None):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserModelSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# User actions (get, update, delete)
class UserAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        try:
            return UserModel.objects.get(pk=pk)
        except UserModel.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserModelSerializer(user)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserModelSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_200_OK)


# Login user (verify)
class LoginUser(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserModelSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
