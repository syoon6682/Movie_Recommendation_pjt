from rest_framework import serializers
from .models import Movie, Review
from accounts.models import User

# review
class ReviewSerializer(serializers.ModelSerializer):
    # 누가 썼는지는 알아야하니까 
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')
    
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'

        
class MovieSerializer(serializers.ModelSerializer):

    reviews = ReviewSerializer(many=True)

    class Meta:
        model = Movie
        fields = '__all__'

