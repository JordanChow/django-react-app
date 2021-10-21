from django.db import models

# Create your models here.


class Review(models.Model):
    #album = models.ForeignKey("albums.Album", on_delete=models.CASCADE)
    #user = models.ForeignKey("users.User", on_delete=models.CASCADE)
    text = models.CharField(max_length=10000)

    def __str__(self):
        return self.name
