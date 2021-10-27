from rest_framework import serializers
from albums.models import Album


# Album serializer
class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('title', 'artist', 'rating', 'date')
