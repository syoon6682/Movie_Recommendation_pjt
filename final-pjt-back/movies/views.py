from django.http import JsonResponse
from django.shortcuts import get_list_or_404, render, get_object_or_404
from rest_framework.decorators import renderer_classes, api_view
from rest_framework.response import Response
from .models import Movie, Review
from .serializers import MovieSerializer, ReviewSerializer
import requests
from rest_framework.renderers import JSONRenderer
from collections import OrderedDict
from rest_framework import status

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

#review
@api_view(['POST'])
def new_review(request, movie_pk):
    movie = get_object_or_404(Movie, movie_pk)
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['GET'])
def review_detail(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    serializer = ReviewSerializer(review)
    return Response(serializer.data)

@api_view(['PUT'])
def update_review(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    if request.user == review.user:
        serializer = ReviewSerializer(instance=review, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

@api_view(['DELETE'])
def delete_review(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    if request.user == review.user:
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)









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
    movies = get_list_or_404(Movie)
    answer = request.GET.getlist('answer[]')
    answer1= answer[0]
    answer2= answer[1]
    answer3= answer[2]
    answer4= answer[3]

    data=[]
    # print(type(serializer))
    # print(serializer)
    

    if answer1 == '부모님':
        for movie in movies:
            if not movie.genre_ids.filter(name = '애니메이션').exists() and movie.genre_ids.filter(name = '코미디').exists() :
                data.append(movie)
    elif answer1 == '친구':
        for movie in movies:
            if movie.genre_ids.filter(name = '애니메이션').exists():
                data.append(movie)
    elif answer1 == '연인':
        for movie in movies:
            if movie.genre_ids.filter(name = '로맨스').exists() and movie.genre_ids.filter(name = '코미디').exists() :
                data.append(movie)
    elif answer1 == '아이들':
        for movie in movies:
            if movie.genre_ids.filter(name = '애니메이션').exists() or movie.genre_ids.filter(name = 'SF').exists() :
                data.append(movie)


    if answer2 == '집':
        pass
    elif answer2 == '캠핑장':
        pass
    elif answer2 == '영화관':
        pass
    elif answer2 == '호텔':
        pass


    if answer3 == '10대 미만':
        pass
    elif answer3 == '10대':
        pass
    elif answer3 == '20대~40대':
        pass
    elif answer3 == '50대~60대':
        pass
    elif answer3 == '70대 이상':
        pass


    if answer4 == '아주 행복':
        pass
    elif answer4 == '화남':
        pass
    elif answer4 == '우울':
        pass
    elif answer4 == '심심':
        pass

    serializer = MovieSerializer(data, many=True)

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