from django.shortcuts import render
from .serializers import DrinkSerializer
from rest_framework import generics, status
from .models import Drink
# Create your views here.


class GetDrinks(generics.ListAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer
