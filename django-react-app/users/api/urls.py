from django.urls import path
from .views import GetAllUsers, UserAPI, RegisterUser, LoginUser
from knox.views import LogoutView as LogoutUser

urlpatterns = [
    path('', GetAllUsers.as_view()),
    path('<int:pk>/', UserAPI.as_view()),
    path('register/', RegisterUser.as_view()),
    path('login/', LoginUser.as_view()),
    path('logout/', LogoutUser.as_view())
]
