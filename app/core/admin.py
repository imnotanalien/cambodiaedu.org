from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from core import models

from .models import (
    Post,
    BlogPost,
    BlogPostCategory,
)

from . forms import (
    PostAdminForm,
)

class UserAdmin(BaseUserAdmin):
    """Define the admin pages for users."""
    ordering = ['id']
    list_display = ['email', 'first_name', 'last_name', 'username', 'bio', 'date_of_birth', 'profile', 'created_at', 'updated_at']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('first_name', 'last_name', 'username', 'bio', 'date_of_birth', 'profile')}),
        (
            _('Permissions'),
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                )
            }
        ),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
    readonly_fields = ['last_login']
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email',
                'password1',
                'password2',
                'first_name',
                'last_name',
                'username',
                'bio',
                'date_of_birth',
                'is_active',
                'is_staff',
                'is_superuser',
            ),
        }),
    )


class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm

# User
admin.site.register(models.User, UserAdmin)

"""Customize Dajngo admin."""
class PostAdmin(admin.ModelAdmin):
    list_display = ["title", "category", "created_at", "updated_at"]
    readonly_fields = ("created_at", "updated_at")

class CategoryAdmin(admin.ModelAdmin):
    list_display = ["categoryName", "categoryUrl"]

admin.site.register(Post)
admin.site.register(BlogPost)
admin.site.register(BlogPostCategory)
