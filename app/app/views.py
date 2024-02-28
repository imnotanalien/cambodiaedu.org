from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpRequest, HttpResponse, HttpResponse as HttpResponse
from django.template import loader

from urllib.parse import urlsplit
from core.models import (
    Post,
    BlogPost,
    BlogPostCategory,
)

from django.db.models import Q


def menu():
    site_categories = BlogPostCategory.objects.all()
    return site_categories

def home(request, **kwargs):
    template = loader.get_template("src/home/home.html")
    post = BlogPost.objects.all()

    # Get hostname and protocol.
    url = request.build_absolute_uri()
    protocol = urlsplit(url)[0]
    host = request.get_host()

    context = {
        "categories": menu(),
        "my_data": post,
    }
    return HttpResponse(template.render(context, request))


def lesson(request, category_url=None):
    template = loader.get_template("src/lesson/lesson.html")
    page_not_found = loader.get_template("src/404-error/404-error.html")

    try:
        data = BlogPost.objects.get(category__categoryUrl=category_url)
    except ObjectDoesNotExist:
        return HttpResponse(page_not_found.render({}, request))

    context = {
        "my_data": data,
        "categories": menu(),
    }
    return HttpResponse(template.render(context, request))


def detail(request, slug_url):
    mymember = BlogPost.objects.get(slug=slug_url)
    template = loader.get_template("src/home/detail/detail.html")
    
    context = {
        "slug": mymember,
    }
    return HttpResponse(template.render(context, request))

def search(request):
    template = loader.get_template("src/search/search.html")
    post = BlogPost.objects.all()
    q_input = request.GET.get('q')

    if q_input is not None and q_input != "":
        search_post = q_input
    else:
        return render(request, "src/search/search.html", context={"categories": menu()})
    
    posts = post.filter(Q(title__icontains=search_post) & Q(body__icontains=search_post))
    if search_post != "" and search_post is not None:
        if posts.exists():
            posts
        else:
            posts = None
    else:
        posts = post.order_by("-created_at")
    
    context = {
        "categories": menu(),
        "queryset": posts,
        "search_title": search_post,
    }
    return HttpResponse(template.render(context, request))

def blog(request):
    template = loader.get_template("src/blog/blog.html")
    context = {
        "categories": menu(),
    }
    return HttpResponse(template.render(context, request))

def calculator(request):
    template = loader.get_template("src/calculator/calculator.html")
    context = {
        "categories": menu(),
    }
    return HttpResponse(template.render(context, request))

def login(request):
    template = loader.get_template("src/login/login.html")
    return HttpResponse(template.render({}, request))

def signup(request):
    template = loader.get_template("src/signup/signup.html")
    return HttpResponse(template.render({}, request))

def about(request):
    template = loader.get_template("src/about/about.html")
    context = {}
    return HttpResponse(template.render(context, request))

def follow(request):
    template = loader.get_template("src/follow/follow.html")
    context = {}
    return HttpResponse(template.render(context, request))

def donate(request):
    template = loader.get_template("src/donate/donate.html")
    context = {}
    return HttpResponse(template.render(context, request))

def contact(request):
    template = loader.get_template("src/contact/contact.html")
    context = {}
    return HttpResponse(template.render(context, request))
