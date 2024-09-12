

from rest_framework import viewsets
from .models import Hotel
from .serializers import HotelSerializer
from .models import Room
from .serializers import RoomSerializer

class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer



class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer