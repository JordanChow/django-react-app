from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('profile', index),
    path('explore', index),
    path('login', index)
]
