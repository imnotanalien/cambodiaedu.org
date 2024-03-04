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

from django.conf.urls.i18n import i18n_patterns
from django.utils.translation import gettext_lazy as _

# Serving static files during development
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path(_('admin/'), admin.site.urls),
    path("__reload__/", include("django_browser_reload.urls")),
]

urlpatterns += i18n_patterns(
    path(_(""), views.home, name="home"),

    path(_("blog/"), views.blog, name="blog"),
    path(_("merch/"), views.merch, name="merch"),

    # Calculator
    path(_("calculator/"), views.calculator, name="calculator"),
    path(_("calculator/basic/"), views.basicCalculator, name="basic-calculator"),
    path(_("calculator/geometry/"), views.geometryCalculator, name="geometry-calculator"),
    path(_("calculator/graphing/"), views.graphingCalculator, name="graphing-calculator"),
    path(_("calculator/probability/"), views.probabilityCalculator, name="probability-calculator"),
    path(_("calculator/about/"), views.aboutCalculator, name="about-calculator"),
    # End, Calculator

    path(_("login/"), views.login, name="login"),
    path(_("signup/"), views.signup, name="signup"),

    path(_("search/"), views.search, name="search"),

    path(_("about/"), views.about, name="about"),
    path(_("follow/"), views.follow, name="follow"),
    path(_("donate/"), views.donate, name="donate"),
    path(_("contact/"), views.contact, name="contact"),

    path(_("<slug:category_url>/"), views.lesson, name="lesson"),
    path(_("<slug:category_url>/<slug:slug_url>/"), views.detail, name="detail"),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
