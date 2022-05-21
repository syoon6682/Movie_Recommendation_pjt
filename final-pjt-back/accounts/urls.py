from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('profile/<username>/', views.profile, name="profile"),
    # path('profile/<username>/update/', views.profileupdate, name="profileUpdate"),
    path('mileage/<username>/', views.add_mileage, name="add_mileage")
]