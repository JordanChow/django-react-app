from django.urls import path
from .views import GetAllUsers, UserAPI, RegisterUser, LoginUser
from knox.views import LogoutView as LogoutUser

urlpatterns = [
    path('users/', GetAllUsers.as_view()),
    path('users/<int:pk>/', UserAPI.as_view()),
    path('users/register/', RegisterUser.as_view()),
    path('users/login/', LoginUser.as_view()),
    path('users/logout/', LogoutUser.as_view())
]
