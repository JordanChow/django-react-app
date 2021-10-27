from albums.models import Album
from rest_framework import generics, permissions
from albums.api.serializers import AlbumSerializer


# Get all albums
class GetAllAlbums(generics.ListAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

# Get album
class GetAlbum(generics.RetrieveAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

# Create an album
class CreateAlbum(generics.CreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

# Update album
class UpdateAlbum(generics.UpdateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

