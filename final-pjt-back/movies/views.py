from django.http import JsonResponse
from django.shortcuts import get_list_or_404, render
from rest_framework.decorators import renderer_classes, api_view
from rest_framework.response import Response
from .models import Movie
from .serializers import MovieSerializer
import requests
from rest_framework.renderers import JSONRenderer

@api_view(('GET',))
# @renderer_classes((JSONRenderer))
def popular_movies(request):
    BASE_URL = 'https://api.themoviedb.org/3'
    path = '/movie/popular'
    params = {
        'api_key' : '41fb3f0fa7ec42fed3af89fea38a8765',
    }
    print('hello')
    response = requests.get(BASE_URL + path, params=params)
    print('hi')
    if response.status_code != 200:
        print(response)
    print(type(response.json()))
    return Response(response.json())


# Create your views here.
def movie(request):
    pass

def review_list(request):
    pass

def review_detail(request):
    pass

def recommendation_question(request):
    pass
    
def recommendation_result(request):
    
    print('도착은 했니..?')


def event_list(request):
    pass

def popcorn(request):
    pass

def review_event(request):
    pass

def movie_making(request):
    pass

def movie_search(request):
    pass