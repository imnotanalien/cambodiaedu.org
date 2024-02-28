from django.db import models
from ckeditor.fields import RichTextField
from django.urls import reverse
from django.utils.text import slugify


class BlogPostCategory(models.Model):
    categoryUrl = models.CharField(max_length=100)
    categoryNameEnglish = models.CharField(max_length=100)
    categoryNameKhmer = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.categoryUrl

class Post(models.Model):
    pass

class BlogPost(models.Model):
    # English version
    title_english = models.CharField(max_length=255)
    body_english = RichTextField()
    # Khmer version
    title_khmer = models.CharField(max_length=255)
    body_khmer = RichTextField()
    # The same version
    category = models.ForeignKey(BlogPostCategory, on_delete=models.CASCADE)
    slug = models.SlugField(default="", unique=True, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title_english

    def save(self, *args, **kwargs):  # new
        if not self.slug:
            self.slug = slugify(self.title_english)
        return super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        kwargs={
            "slug": self.category
        }
        return reverse("detail", kwargs)
