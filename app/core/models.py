from django.db import models
from ckeditor.fields import RichTextField
from django.urls import reverse
from django.utils.text import slugify

from django.utils import timezone
import string
import random

from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)

# ===== Customize Django user models. =====
def random_user_id():
    return "".join(random.choice(string.digits) for _ in range(4)) # (string.ascii_letters + string.digits)


class UserManager(BaseUserManager):
    """Manager for users."""

    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return a new user."""
        if not email:
            raise ValueError('User must have an email address.')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Create and return a new superuser."""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """User in the system."""
    class Meta:
        verbose_name_plural = "0 - User"

    email = models.EmailField(max_length=100, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True, blank=True, null=True)
    bio = models.CharField(max_length=255, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    profile = models.ImageField(null=False, blank=False, upload_to="user/profile/", default="user/profile/default.png")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] #['date_of_birth']

    def save(self, *args, **kwargs):
        if not self.username:
            self.username = "user" + random_user_id()

        super(User, self).save(*args, **kwargs)

    def get_absolute_url(self, *args, **kwargs):
        kwargs = {
            "username": self.username,
        }
        return reverse("user", kwargs=kwargs)
# ===== End, Customize Django user models. =====


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
