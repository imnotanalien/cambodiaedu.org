from django.shortcuts import render
from django.http import HttpResponse

# Create header navigation bar
def home(request):
    return render(request, 'homepage/src/home.html')

def khmer(request):
    return render(request, 'homepage/src/khmer.html')

def python(request):
    return render(request, 'homepage/src/python.html')

def java(request):
    return render(request, 'homepage/src/java.html')

def c(request):
    return render(request, 'homepage/src/c.html')

def cpp(request):
    return render(request, 'homepage/src/cpp.html')

def csharp(request):
    return render(request, 'homepage/src/csharp.html')

def html(request):
    return render(request, 'homepage/src/html.html')
    
def css(request):
    return render(request, 'homepage/src/css.html')

def javascript(request):
    return render(request, 'homepage/src/javascript.html')


# Create submenu of sidebar
def khmerMenu(request):
    return render(request, 'homepage/src/menu/khmerMenu.html')

def pythonMenu(request):
    return render(request, 'homepage/src/menu/pythonMenu.html')

def javaMenu(request):
    return render(request, 'homepage/src/menu/javaMenu.html')

def cMenu(request):
    return render(request, 'homepage/src/menu/cMenu.html')

def cppMenu(request):
    return render(request, 'homepage/src/menu/cppMenu.html')

def csharpMenu(request):
    return render(request, 'homepage/src/menu/csharpMenu.html')

def htmlMenu(request):
    return render(request, 'homepage/src/menu/htmlMenu.html')
    
def cssMenu(request):
    return render(request, 'homepage/src/menu/cssMenu.html')

def javascriptMenu(request):
    return render(request, 'homepage/src/menu/javascriptMenu.html')
