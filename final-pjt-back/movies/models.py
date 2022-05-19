from statistics import mode
from django.conf import settings
from django.db import models
from accounts.models import User

# Create your models here.

# 아마 잘 안쓸 거 같아서 skeleton 수준으로만 작성

class Movie(models.Model):
    title = models.CharField(max_length=100)
    overview = models.TextField()
    popularity = models.FloatField()
    release_date = models.DateField()
    vote_count = models.IntegerField()
    vote_average = models.FloatField()
    poster_path = models.CharField(max_length=500)


# 완성도 높인 모델

class Article(models.Model):
    title = models.CharField(max_length=50)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    rank = models.IntegerField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Article_like(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
