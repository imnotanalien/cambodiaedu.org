from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, 'src/home.html')

def khmer(request):
    return render(request, 'src/khmer.html')

def python(request):
    return render(request, 'src/python.html')

def java(request):
    return render(request, 'src/java.html')

def c(request):
    return render(request, 'src/c.html')

def cpp(request):
    return render(request, 'src/cpp.html')

def csharp(request):
    return render(request, 'src/csharp.html')

def html(request):
    return render(request, 'src/html.html')
    
def css(request):
    return render(request, 'src/css.html')

def javascript(request):
    return render(request, 'src/javascript.html')

def login(request):
    return render(request, 'src/login.html')

# Create submenu of sidebar
def khmerMenu(request):
    return render(request, 'src/menu/khmerMenu.html')

def pythonMenu(request):
    return render(request, 'src/menu/pythonMenu.html')

def javaMenu(request):
    return render(request, 'src/menu/javaMenu.html')

def cMenu(request):
    return render(request, 'src/menu/cMenu.html')

def cppMenu(request):
    return render(request, 'src/menu/cppMenu.html')

def csharpMenu(request):
    return render(request, 'src/menu/csharpMenu.html')

def htmlMenu(request):
    return render(request, 'src/menu/htmlMenu.html')
    
def cssMenu(request):
    return render(request, 'src/menu/cssMenu.html')

def javascriptMenu(request):
    return render(request, 'src/menu/javascriptMenu.html')

# Blog posts
def blogPost(request):
    return render(request, 'blog/blog.html')

# Videos
def videosHome(request):
    return render(request, 'videos/videos.html')

def videoDetails(request):
    return render(request, 'videos/video-details.html')

# More
def moreAbout(request):
    return render(request, 'more/about.html')

def moreContact(request):
    return render(request, 'more/contact.html')

def moreDonate(request):
    return render(request, 'more/donate.html')

def moreSocial(request):
    return render(request, 'more/social.html')
