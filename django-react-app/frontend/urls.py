from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('profile', index),
    path('login', index),
    path('register', index),
]
