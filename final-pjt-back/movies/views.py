from django.http import JsonResponse
from django.shortcuts import get_list_or_404, render, get_object_or_404
from rest_framework.decorators import renderer_classes, api_view
from rest_framework.response import Response
from .models import Movie
from .serializers import MovieSerializer
import requests
from rest_framework.renderers import JSONRenderer

@api_view(('GET',))
def popular_movies(request):
    BASE_URL = 'https://api.themoviedb.org/3'
    path = '/movie/popular'
    params = {
        'api_key' : '41fb3f0fa7ec42fed3af89fea38a8765',
    }
    print('hello')
    response = requests.get(BASE_URL + path, params=params)
    print('hi')
    serializer = MovieSerializer(response)
    print(serializer)
    if response.status_code != 200:
        print(response)
    print(type(response.json()))
    return Response(MovieSerializer.data)


# Create your views here.
@api_view(('GET',))
def movie(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)

def review_list(request):
    pass

def review_detail(request):
    pass

def recommendation_question(request):
    pass

# @api_view(('GET',))
# def recommendation_result(request):
#     print('도착은 했니..?')
#     BASE_URL = 'https://api.themoviedb.org/3'
#     path = '/movie/popular'
#     params = {
#         'api_key' : '41fb3f0fa7ec42fed3af89fea38a8765',
#     }
#     print('hello')
#     response = requests.get(BASE_URL + path, params=params)
#     print('hi')
#     serializer = MovieSerializer(response)
#     print(serializer)
#     if response.status_code != 200:
#         print(response)
#     print(type(response.json()))
    
#     return Response(MovieSerializer.data)

@api_view(('GET',))
# @renderer_classes((JSONRenderer))
def recommendation_result(request):
    movie = get_list_or_404(Movie)
    serializer = MovieSerializer(movie, many=True)
    return Response(serializer.data)


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