from django.db import models
from django.db.models.deletion import DO_NOTHING
from reviews.models import Review

# Create your models here.


class Album(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    #user_reviews = models.ForeignKey(Review, on_delete=DO_NOTHING)

    def __str__(self):
        return self.title
