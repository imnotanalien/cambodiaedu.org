# https://youtu.be/PUzgZrS_piQ
# https://github.com/scalablescripts/django-auth
# URL mappings for the user API.
from django.urls import path

from user import views
from .views import *

app_name = 'user'

urlpatterns = [
    path('signup/', SignUpView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('accounts/', views.GetAllUserAccouts.as_view(), name='accounts'),
]
