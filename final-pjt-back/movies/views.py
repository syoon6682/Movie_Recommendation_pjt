from django.http import JsonResponse
from django.shortcuts import get_list_or_404, render, get_object_or_404
from rest_framework.decorators import renderer_classes, api_view
from rest_framework.response import Response
from .models import Movie, Review, Comment, Like
from .serializers import MovieSerializer, ReviewSerializer, ReviewListSerializer, CommentSerializer
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
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie, user=request.user) 
        # reviews = movie.reviews.all()
        # serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def review_list(request, movie_pk):
    reviews = get_list_or_404(Review, movie_id=movie_pk)
    serializer = ReviewListSerializer(reviews, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def review_detail(request, movie_pk, review_pk):
    review = get_object_or_404(Review, id=review_pk)
    serializer = ReviewListSerializer(review)
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




# Comment & Like
@api_view(['POST'])
def like_review(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    user = request.user
    if review.like_users.filter(pk=user.pk).exists():
        review.like_users.remove(user)
        serializer = ReviewSerializer(review)
        return Response(serializer.data)
    else:
        review.like_users.add(user)
        serializer = ReviewSerializer(review)
        return Response(serializer.data)


# @api_view(['POST'])
# def create_comment(request, review_pk):
#     user = request.user
#     review = get_object_or_404(Review, pk=review_pk)
    
#     serializer = CommentSerializer(data=request.data)
#     print('hi')
#     if serializer.is_valid(raise_exception=True):
#         serializer.save(review=review, user=user)

#         # 기존 serializer 가 return 되면, 단일 comment 만 응답으로 받게됨.
#         # 사용자가 댓글을 입력하는 사이에 업데이트된 comment 확인 불가 => 업데이트된 전체 목록 return 
#         comments = review.comments.all()
#         serializer = CommentSerializer(comments, many=True)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def new_comment(request, movie_pk, review_pk):
    user = request.user
    review = get_object_or_404(Review, pk=review_pk)
    # movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(review=review, user=user)

        # 기존 serializer 가 return 되면, 단일 comment 만 응답으로 받게됨.
        # 사용자가 댓글을 입력하는 사이에 업데이트된 comment 확인 불가 => 업데이트된 전체 목록 return 
        comments = review.comments.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT', 'DELETE'])
def update_delete_comment(request, movie_pk, review_pk, comment_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    review = get_object_or_404(Review, pk=review_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)

    def update_comment():
        if request.user == comment.user:
            serializer = CommentSerializer(instance=comment, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                comments = review.comments.all()
                serializer = CommentSerializer(comments, many=True)
                return Response(serializer.data)

    def delete_comment():
        if request.user == comment.user:
            comment.delete()
            comments = review.comments.all()
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data)
    
    if request.method == 'PUT':
        return update_comment()
    elif request.method == 'DELETE':
        return delete_comment()









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
            if (not movie.adult and
                not movie.genre_ids.filter(name = '애니메이션').exists() and
                not movie.genre_ids.filter(name = '공포').exists()):
                data.append(movie)
    
    elif answer1 == '친구':
        for movie in movies:
            data.append(movie)
    
    elif answer1 == '연인':
        for movie in movies:
            if (movie.genre_ids.filter(name = '로맨스').exists() or 
                movie.genre_ids.filter(name = '코미디').exists()):
                data.append(movie)
    
    elif answer1 == '아이들':
        for movie in movies:
            if (not movie.genre_ids.filter(name = '다큐멘터리').exists() and 
                not movie.genre_ids.filter(name = '범죄').exists() and 
                not movie.adult and 
                not movie.genre_ids.filter(name = '공포').exists()):
                data.append(movie)


    if answer2 == '집':
        pass
    elif answer2 == '캠핑장':
        for movie in data:
            if movie.adult:
                data.remove(movie)
    elif answer2 == '영화관':
        for movie in data:
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