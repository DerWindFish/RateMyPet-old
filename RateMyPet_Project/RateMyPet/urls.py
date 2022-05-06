from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.user_list, name='artist_list'),
    path('', views.pet_list, name='pet_list'),
    path('userratings/', views.userrating_list, name='userrating_list'),
]