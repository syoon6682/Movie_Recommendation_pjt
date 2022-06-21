from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProfileSerializer

User = get_user_model()

@api_view(['GET'])
def profile(request, username):
    user = get_object_or_404(User, username=username)
    serializer = ProfileSerializer(user)
    return Response(serializer.data)


@api_view(['PUT'])
def profileupdate(request, username):
    user = get_object_or_404(User, username=username)
    serializer = ProfileSerializer(user, data=request.data)
    print(request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data)

# 소셜로그인은 싫어...

# def add_mileage(request, username):
#     user = get_object_or_404(User, username=username)
#     user.mileage = request.user.mileage
#     serializer = ProfileSerializer(user)
#     return Response(serializer.data)
