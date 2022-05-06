from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('pets/', views.PetList.as_view(), name='pet_list'),
    path('pets/<int:pk>', views.PetDetail.as_view(), name='pet_detail'),
    path('userratings/', views.UserRatingList.as_view(), name='userrating_list'),
    path('userratings/<int:pk>', views.UserRatingDetail.as_view(), name='userrating_detail')
]