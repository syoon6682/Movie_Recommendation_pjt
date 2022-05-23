from statistics import mode
from django.conf import settings
from django.db import models
from accounts.models import User

# Create your models here.


class Genre(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(max_length=100)
    overview = models.TextField()
    release_date = models.DateField()
    popularity = models.FloatField()
    vote_count = models.IntegerField()
    vote_average = models.FloatField()
    poster_path = models.CharField(max_length=500)
    genre_ids = models.ManyToManyField(Genre, related_name="movies")




# 완성도 높인 모델

class Article(models.Model):
    title = models.CharField(max_length=50)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    rank = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Article_like(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
