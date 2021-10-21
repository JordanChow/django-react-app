from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin


class UserAdminConfig(UserAdmin):
    search_fields = ('email', 'username',)
    ordering = ('-date_joined',)
    list_display = ('email', 'username', 'is_active')
    fieldsets = (
        ('Account', {'fields': ('email', 'username', 'date_joined',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active',)}),
    )


# Register your models here.
admin.site.register(User, UserAdminConfig)
