from django.contrib import admin
from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.popular_movies, name="popular_movies"),
    path('<int:movie_pk>/', views.movie, name="movie_detail"),
    path('<int:movie_pk>/review/', views.review_list, name="review_list"),
    path('<int:movie_pk>/review/<int:review_pk>/', views.review_detail, name="review_detail"),
    path('recommendation/question/', views.recommendation_question, name="recommendation_question"),
    path('recommendation/result/', views.recommendation_result, name="recommendation_result"),
    path('event/', views.event_list, name="event_list"),
    path('event/popcorn', views.popcorn, name="popcorn"),
    path('event/reviewevent', views.review_event, name="review_event"),
    path('event/moviemaking', views.movie_making, name="movie_making"),
    path('search/<search>', views.movie_search, name="movie_search"),
]