from django.contrib import admin
from .models import (
    Post,
    BlogPost,
    BlogPostCategory,
)

from . forms import (
    PostAdminForm
)


"""Customize Dajngo admin."""
class PostAdmin(admin.ModelAdmin):
    list_display = ["title", "category", "created_at", "updated_at"]
    readonly_fields = ("created_at", "updated_at")

class CategoryAdmin(admin.ModelAdmin):
    list_display = ["categoryName", "categoryUrl"]

admin.site.register(Post)
admin.site.register(BlogPost)
admin.site.register(BlogPostCategory)
