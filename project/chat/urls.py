# chat/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # صفحه اصلی چت
]
