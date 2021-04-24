from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Staff(models.Model):
    firstName = models.CharField(max_length=200)
    secondName = models.CharField(max_length=200)
    live = models.BooleanField(default=False)

    def __str__(self):
        return self.firstName + ' ' + self.secondName