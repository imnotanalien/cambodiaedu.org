from django.db import models
from ckeditor.fields import RichTextField
from django.urls import reverse
from django.utils.text import slugify

from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

# ===== Customize Django user models. =====
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """responsible for both creating and saving a user with the given parameters"""
        if not email:
            raise ValueError("Cannot create a user without an email address")
        
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, email, password):
        """Creates and saves a staff user with the given email and password."""
        user = self.create_user(
            email,
            password=password,
        )
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """Responsible for creating and saving a superuser with the given parameters."""
        user = self.create_user(
            email,
            password=password,
        )
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user

# Hook in the New Manager to our Model.
class User(AbstractBaseUser):
    email = models.EmailField(verbose_name="user email address", max_length=100, unique=True,)
    first_name = models.CharField(max_length=30, default="No First Name")
    last_name = models.CharField(max_length=30, default="No Last Name")
    date_of_birth = models.DateField(verbose_name="Birthday", null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False) # a superuser
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    # Notice the absence of a "Password field" that is built-in.
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "first_name",
        "last_name",
        "date_of_birth",
    ] # Note: Email & Password are required by default.

    def __str__(self):
        return self.email
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
