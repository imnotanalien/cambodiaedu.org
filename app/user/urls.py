# https://dev.to/ki3ani/implementing-jwt-authentication-and-user-profile-with-django-rest-api-part-3-3dh9
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views

app_name = "user"

urlpatterns = [
    # Authentication
    path("login/", views.MyTokenObtainPairView.as_view(), name="login"),
    path("signup/", views.SignUpView.as_view(), name="signup"),
    path("refresh/", TokenRefreshView.as_view(), name="refresh-token"),

    # Get user profile
    path("profile/", views.getProfile, name="profile"),
    path("profile/update/", views.updateProfile, name="update-profile"),

    # Get this user posted.
    path("post/", views.getPost, name="user-posts"),
]
