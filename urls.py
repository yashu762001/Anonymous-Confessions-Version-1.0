from django.urls import path
from . import views

urlpatterns = [
    path('conf/', views.conf, name='conf'),
    path('college/', views.college, name='college'),
    path('gender/', views.gender, name='gender'),
    path('confess/', views.confess, name='confess'),
    path('like/<int:pk>', views.like, name='edit'),
    path('confess/<int:pk>', views.self, name='self confession'),
    path('confess/comments/<int:pk>', views.comment, name="comments"),
    path('confess/replies/<int:pk>', views.reply, name='reply'),
]
