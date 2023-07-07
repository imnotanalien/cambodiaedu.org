"""
URL configuration for app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),

    # My path
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
    path('login/', views.login, name="login"),

    # Submenu of sidebar called URL
    path('khmer/lesson/', views.khmerMenu, name="khmerMenu"),
    path('python/lesson/', views.pythonMenu, name="pythonMenu"),
    path('java/lesson/', views.javaMenu, name="javaMenu"),
    path('c/lesson/', views.cMenu, name="cMenu"),
    path('cpp/lesson/', views.cppMenu, name="cppMenu"),
    path('csharp/lesson/', views.csharpMenu, name="csharpMenu"),
    path('html/lesson/', views.htmlMenu, name="htmlMenu"),
    path('css/lesson/', views.cssMenu, name="cssMenu"),
    path('javascript/lesson/', views.javascriptMenu, name="javascriptMenu"),

    # Blog posts
    path('blog/', views.blog, name="Blog"),
    path('blog/post/', views.blogPost, name="Blog posts"),
    path('blog/author/', views.blogAuthor, name="Blog author"),

    # Videos
    path('videos/', views.videosHome, name="Video home"),
    path('video-details/', views.videoDetails, name="Video detail page"),

    # More
    path('about/', views.moreAbout, name="More About"),
    path('contact/', views.moreContact, name="More Contact"),
    path('donate/', views.moreDonate, name="More Donate"),
    path('request_budget/', views.moreRequest_Budget, name="Request budget"),
    path('social/', views.moreSocial, name="More Social"),
]
