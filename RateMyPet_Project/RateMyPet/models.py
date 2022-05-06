from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username

class Pet(models.Model):
    rating = models.TextField(max_length=300)
    image_url = models.TextField()
    userid = models.ForeignKey(User, on_delete=models.CASCASE, related_name='pets')
    # create userrating here

    def __str__(self):
        return self.rating
