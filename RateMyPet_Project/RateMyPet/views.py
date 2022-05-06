from django.shortcuts import render
from .models import User, Pet, UserRating

# Create your views here.
def user_list(request):
    users = User.objects.all()
    return render(request, 'RateMyPet/user_list.html', {'users':users})

def pet_list(request):
    pets = Pet.objects.all()
    return render(request, 'RateMyPet/pet_list.html', {'pets': pets})

def userrating_list(request):
    userratings = UserRating.objects.all()
    return render(request, 'RateMyPet/userrating_list.html', {'userratings':userratings})