from dataclasses import fields
import profile
from rest_framework import serializers
# from rest_auth.serializers import UserDetailSerializer
from django.contrib.auth import get_user_model
# from django.utils.translation import ugettext_lazy as _

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'email', 'mileage')


# class UserSerializer(UserDetailSerializer):

#     mileage = serializers.IntegerField(source="User.mileage")

#     class Meta(UserDetailSerializer.Meta):
#         fields = UserDetailSerializer.Meta.fields +('mileage', )
    
#     def update(self, instance, validated_data):
#         profile_data = validated_data.pop('userprofile', {})
#         mileage = profile_data.get('mileage')

#         instance = super(UserSerializer, self).update(instance, validated_data)

#         profile = instance.userprofile
#         if profile_data and mileage:
#             profile.mileage = mileage
#             profile.save()
#         return instance