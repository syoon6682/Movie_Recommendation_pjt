from django.contrib import admin
from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.popular_movies, name="popular_movies"),
    path('<int:movie_pk>/', views.movie, name="movie_detail"),
    path('<int:movie_pk>/review/', views.review_list, name="review_list"),
    path('<int:movie_pk>/review/new/', views.new_review, name="new_review"),
    path('<int:movie_pk>/review/<int:review_pk>/', views.review_detail, name="review_detail"),

    #comments(장고 + drf만 존재 == vue router X)
    path('<int:movie_pk>/review/<int:review_pk>/comments/', views.new_comment, name='new_comment'), 
    path('<int:movie_pk>/review/<int:review_pk>/comment/<int:comment_pk>/', views.update_delete_comment, name='update_delete_comment'), 

    path('recommendation/question/', views.recommendation_question, name="recommendation_question"),
    path('recommendation/result/', views.recommendation_result, name="recommendation_result"),
    path('event/', views.event_list, name="event_list"),
    path('event/popcorn', views.popcorn, name="popcorn"),
    path('event/reviewevent', views.review_event, name="review_event"),
    path('event/moviemaking', views.movie_making, name="movie_making"),
    path('search/<search>', views.movie_search, name="movie_search"),
]