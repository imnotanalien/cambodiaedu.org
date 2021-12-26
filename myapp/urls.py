from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('khmer/', views.khmer, name="khmer"),
    path('python/', views.python, name="python"),
    path('java/', views.java, name="java"),
    path('c/', views.c, name="c"),
    path('cpp/', views.cpp, name="cpp"),
    path('csharp/', views.csharp, name="csharp"),
    path('login/', views.login, name="login"),
]