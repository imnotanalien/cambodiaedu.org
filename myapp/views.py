from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    context = {
        'name': 'den',
        'age': 21,
        'nationality': 'Cambodian',
    }
    return render(request, 'home.html', context)

def khmer(request):
    return render(request, 'khmer.html')

def python(request):
    return render(request, 'python.html')

def java(request):
    return render(request, 'java.html')

def c(request):
    return render(request, 'c.html')

def cpp(request):
    return render(request, 'cpp.html')

def csharp(request):
    return render(request, 'csharp.html')

def login(request):
    return render(request, 'login.html')