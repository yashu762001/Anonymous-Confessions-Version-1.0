from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..models import Confession, Comment, Reply
from .serializers import ConfessionSerializer
from rest_framework.views import APIView

# GET REQUEST TO RETRIEVE ALL THE CONFESSIONS FROM THE DATABASE
@api_view(['GET'])
def conf(request):
    try:
        obj = Confession.objects.all()
        print(obj)
        temp = []
        for obj1 in obj:
            temp.append({
                'id': obj1.id,
                'title': obj1.title,
                'college': obj1.college,
                'gender': obj1.gender,
                'confession': obj1.confession,
                'date': obj1.date,
                'likes': obj1.post_likes,
            })
        return Response(temp)

    except Exception as e:

        return Response(status=status.HTTP_404_NOT_FOUND)

# POST REQUEST TO WRITE CONFESSIONS
@api_view(['POST'])
def write_confession(request):
    try:
        obj1 = request.data
        obj = Confession(title=obj1['title'], college=obj1['college'], gender=obj1['gender'],
                         confession=obj1['confession'])
        obj.save()
        return Response(status=status.HTTP_200_OK)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

# POST REQUEST TO WRITE COMMENTS ON THE POSTS
@api_view(['POST'])
def write_comment(request, post_id):
    try:
        obj1 = request.data
        obj = Comment(post=Confession.objects.get(id=post_id), name=obj1['name'], comment=obj1['comment'])
        obj.save()
        return Response(status=status.HTTP_200_OK)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

# RETREIVING ALL THE CONFESSIONS OF A PARTICULAR GENDER
@api_view(['GET'])
def sort_by_gender(request, gender):
    try:
        queryset = Confession.objects.filter(gender=gender)
        print(queryset)
        dict = []
        for obj in queryset:
            dict.append({
                'title': obj.title,
                'college': obj.college,
                'confession': obj.confession,
                'date': obj.date,
                'likes': obj.post_likes,
            })
        return Response(dict)

    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

# RETRIEVING ALL THE CONFESSIONS OF A PARTICULAR COLLEGE
@api_view(['GET'])
def sort_by_college(request, college):
    try:
        queryset = Confession.objects.filter(college=college)
        print(queryset)
        dict = []
        for obj in queryset:
            dict.append({
                'title': obj.title,
                'gender': obj.gender,
                'confession': obj.confession,
                'date': obj.date,
                'likes': obj.post_likes,
            })
        return Response(dict)

    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

#REPLYING TO A PARTICULAR COMMENT
@api_view(['POST'])
def write_reply(request, comment_id):
    try:
        obj1 = request.data
        print(obj1)
        obj = Reply(comment=Comment.objects.get(id=comment_id), name=obj1['name'], reply=obj1['reply'])
        obj.save()
        return Response(status=status.HTTP_200_OK)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def all_comments(request):
    try:
        obj1 = Comment.objects.all()
        dict = []
        for obj in obj1:
            dict.append({
                'id': obj.id,
                'name': obj.name,
                'comment': obj.comment,
            })

        return Response(dict)

    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)

# TOTAL LIKES ON A CONFESSION
@api_view(['GET'])
def likes(request, post_id):
    try:
        obj = Confession.objects.get(id=post_id)
        like = obj.post_likes
        like += 1
        obj.post_likes = like
        obj.save()
        return Response(obj.post_likes)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)
