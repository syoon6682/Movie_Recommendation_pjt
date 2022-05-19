from django.contrib import admin
from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('<int:movie_pk>/', views.Movie, name="movie_detail"),
    path('<int:movie_pk>/review/', views.ReviewList, name="review_list"),
    path('<int:movie_pk>/review/<int:review_pk>/', views.ReviewDetail, name="review_detail"),
    path('recommendation/question/', views.RecommendationQuestion, name="recommendation_question"),
    path('recommendation/result/', views.RecommendationResult, name="recommendation_result"),
    path('event/', views.EventList, name="event_list"),
    path('event/popcorn', views.Popcorn, name="popcorn"),
    path('event/reviewevent', views.ReviewEvent, name="review_event"),
    path('event/moviemaking', views.MovieMaking, name="movie_making"),
    path('search/<search>', views.MovieSearch, name="movie_search"),
]
