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
    path('html/', views.html, name="html"),
    path('css/', views.css, name="css"),
    path('javascript/', views.javascript, name="javascript"),

    # Submenu of sidebar called URL
    path('khmer/lesson', views.khmerMenu, name="khmerMenu"),
    path('python/lesson', views.pythonMenu, name="pythonMenu"),
    path('java/lesson', views.javaMenu, name="javaMenu"),
    path('c/lesson', views.cMenu, name="cMenu"),
    path('cpp/lesson', views.cppMenu, name="cppMenu"),
    path('csharp/lesson', views.csharpMenu, name="csharpMenu"),
    path('html/lesson', views.htmlMenu, name="htmlMenu"),
    path('css/lesson', views.cssMenu, name="cssMenu"),
    path('javascript/lesson', views.javascriptMenu, name="javascriptMenu"),
]