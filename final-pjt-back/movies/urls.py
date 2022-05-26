from django.contrib import admin
from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('<int:movie_pk>/', views.movie, name="movie_detail"),
    path('<int:movie_pk>/review/', views.review_list, name="review_list"),
    path('<int:movie_pk>/review/new/', views.new_review, name="new_review"),
    path('<int:movie_pk>/review/<int:review_pk>/', views.review_detail, name="review_detail"),
    path('<int:movie_pk>/review/<int:review_pk>/edit/', views.update_review, name="update_review"),
    path('review/<int:review_pk>/delete/', views.delete_review, name="delete_reivew"),
    path('<int:movie_pk>/review/<int:review_pk>/like/', views.like_review, name="like_review"),
    
    
    #comments(장고 + drf만 존재 == vue router X)
    path('<int:movie_pk>/review/<int:review_pk>/comments/', views.new_comment_comments_list, name='new_comment'), 
    path('<int:movie_pk>/review/<int:review_pk>/comment/<int:comment_pk>/', views.update_delete_comment, name='update_delete_comment'), 
    path('recommendation/result/', views.recommendation_result, name="recommendation_result"),
    path('event/reviewevent/', views.review_event, name="review_event"),
    path('event/moviemaking/', views.movie_making, name="movie_making"),
    path('search/<search>/', views.movie_search, name="movie_search"),
]