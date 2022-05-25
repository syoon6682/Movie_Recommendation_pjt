from rest_framework import serializers

from .models import Movie, Review
from accounts.models import User

# review
class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('pk', 'title', )

class MovieSerializer(serializers.ModelSerializer):
    # review_set = ReviewSerializer(read_only=True, many=True)
    class Meta:
        model = Movie
        fields = '__all__'

class MovieItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('pk', )

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# CUD => validation
# R => Data serializing
# class CommentSerializer(serializers.ModelSerializer):
    
#     class UserSerializer(serializers.ModelSerializer):
#         class Meta:
#             model = User
#             fields = ('pk', 'username')

#     user = UserSerializer(read_only=True)

#     class Meta:
#         model = Comment
#         fields = ('pk', 'user', 'content', 'review',)
#         read_only_fields = ('review', )



# class LikeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Like
#         fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserProfileSerializer(read_only=True)
    movie = MovieItemSerializer(read_only=True)
    # comments = CommentSerializer(many=True, read_only=True)
    # like_users = LikeSerializer(read_only=True, many=True)
    
    class Meta:
        model = Review
        fields = ('title',  'content', 'movie', 'user',)


