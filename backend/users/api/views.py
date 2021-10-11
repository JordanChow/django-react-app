from .serializers import UserSerializer
from users.models import User as UserModel

from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from rest_framework import status, generics, mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets


## Model ViewSet
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

#  Generic ViewSet with Mixins
# class UserViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin,
 #                   mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
 #     serializer_class = UserSerializer
 #     queryset = UserModel.objects.all()


## ViewSET with CRUD
# class UserViewSet(viewsets.ViewSet):
    # def list(self, request):
    #     queryset = UserModel.objects.all()
    #     serializer = UserSerializer(queryset, many=True)
    #     return Response(serializer.data)

    # def create(self, request):
    #     serializer = UserSerializer(data=request.data)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    # def retrieve(self, request, pk=None):
    #     queryset = UserModel.objects.all()
    #     user = get_object_or_404(queryset, pk=pk)
    #     serializer = UserSerializer(user)
    #     return Response(serializer.data)

    # def update(self, request, pk=None):
    #     user = UserModel.objects.get(pk=pk)
    #     serializer = UserSerializer(user, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

class GenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                     mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    lookup_field = 'id'
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, id=None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)

    def delete(self, request, id=None):
        return self.destroy(request, id)


class User(APIView):
    # Get all users
    def get(self, request):
        users = UserModel.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
    # Create new user
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class UserDetails(APIView):
    def get_object(self, id):
        try:
            return UserModel.objects.get(id=id)
        except User.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        user = self.get_object(id)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, id):
        user = self.get_object(id)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        user = self.get_object(id)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
