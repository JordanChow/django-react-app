from .serializers import UserSerializer as UserModelSerializer
from .serializers import RegisterUserSerializer
from users.models import User as UserModel

from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView


class UserView(generics.ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserModelSerializer


class RegisterUserView(APIView):
    serializer_class = RegisterUserSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
