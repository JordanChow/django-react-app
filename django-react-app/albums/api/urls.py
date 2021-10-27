from django.urls import path
from .views import CreateAlbum, GetAlbum, GetAllAlbums, UpdateAlbum

urlpatterns = [
    path('', GetAllAlbums.as_view()),
    path('<int:pk>/', GetAlbum.as_view()),
    path('create/', CreateAlbum.as_view()),
    path('update/', UpdateAlbum.as_view())
]