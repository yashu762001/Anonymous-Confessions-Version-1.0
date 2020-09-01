from django.contrib import admin
from .models import Confession, Comment, Reply
# Register your models here.

admin.site.register(Confession)
admin.site.register(Comment)
admin.site.register(Reply)
