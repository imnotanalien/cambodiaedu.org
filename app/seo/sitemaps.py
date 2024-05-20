from django.contrib.sitemaps import Sitemap
from django.contrib import sitemaps
from django.urls import reverse
from django.utils import timezone

from core.models import Post

class MenuViewSitemap(sitemaps.Sitemap):
    priority = 0.5
    changefreq = "daily"

    def items(self):
        return [
            "khmer", "python",
            "login", "signup",
        ]
    
    def location(self, item):
        return reverse("category", args=[str(item)])

    def lastmod(self, item):
        return timezone.now()

class PostDetailViewSitemap(sitemaps.Sitemap):
    priority = 0.5
    changefreq = "daily"

    def items(self):
        return Post.objects.all()

    def lastmod(self, obj):
        return obj.updated_at
