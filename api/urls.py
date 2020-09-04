from django.urls import path
from . import views

urlpatterns = [
    path('conf/', views.conf, name='Confessions'),
    path('confess/', views.write_confession, name='confess'),
    path('comment/<int:post_id>/', views.write_comment, name='comment'),
    path('gender/<slug:gender>/', views.sort_by_gender, name='gender'),
    path('college/<slug:college>/', views.sort_by_college, name='college'),
    path('reply/<int:comment_id>/', views.write_reply, name='reply'),
    path('all_comments/', views.all_comments, name='all_comments'),
    path('likes/<int:post_id>', views.likes, name='likes'),

]
