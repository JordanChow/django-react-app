from django.db import models
from rest_framework.fields import ImageField


# Create your models here.
class Album(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=2, decimal_places=1, null=True)
    date = models.DateField(null=True)
    cover = models.ImageField(upload_to="images")

    def __str__(self):
        return self.title
