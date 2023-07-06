from django.urls import path
from .views import GetDrinks


urlpatterns = [
    path("get-drinks", GetDrinks.as_view())     
]
