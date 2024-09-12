

from django.db import models

# Create your models here.

from django.db import models

class Hotel(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    rating = models.IntegerField()

    def __str__(self):
        return self.name


class Room(models.Model):
    hotel = models.ForeignKey(Hotel, related_name='rooms', on_delete=models.CASCADE)
    room_number = models.CharField(max_length=10)
    room_type = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.room_number} - {self.hotel.name}"