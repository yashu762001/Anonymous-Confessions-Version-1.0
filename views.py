from django.shortcuts import render, redirect
from .models import Confession, Comment, Reply
from django.http import HttpResponse


# Create your views here.


def conf(request):
    obj = Confession.objects.all()
    return render(request, 'confession/index.html', {'obj1': obj})


def college(request):
    if request.method == 'POST':
        col = request.POST.get('college')
        obj = Confession.objects.filter(college=col)
        if len(obj) == 0:
            obj = "No Results Found"
            return HttpResponse('No Confessions Made By Students of Entered College <br> <a href = "/myapp/conf">BACK '
                                'To '
                                'Confessions </a>')
        return render(request, 'confession/index.html', {'obj1': obj})
    else:
        return render(request, 'confession/college.html')


def gender(request):
    if request.method == 'POST':
        col = request.POST.get('gender')
        obj = Confession.objects.filter(gender=col)
        if len(obj) == 0:
            obj = "No Results Found"
            return HttpResponse('No Confessions Made By Entered Category <br> <a href = "/myapp/conf">BACK tO '
                                'Confessions </a>')
        return render(request, 'confession/index.html', {'obj1': obj})
    else:
        return render(request, 'confession/gender.html')


def confess(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        coll = request.POST.get('college')
        gen = request.POST.get('gender')
        con = request.POST.get('confession')
        obj = Confession(title=title, college=coll, gender=gen, confession=con)
        obj.save()
        return HttpResponse('Your Confession is added successfully on the confession page.')

    else:
        return render(request, 'confession/confess.html')


def like(request, pk):
    if request.method == 'POST':
        obj = Confession.objects.get(id=pk)
        count = obj.post_likes
        count += 1
        obj.post_likes = count
        obj.save()
        string = "/myapp/confess/" + str(pk)
        return redirect(string)

    else:
        pass


def self(request, pk):
    obj1 = Confession.objects.get(id=pk)
    return render(request, 'confession/product.html', {'obj': obj1})


def comment(request, pk):
    if request.method == 'POST':
        name = request.POST.get('name')
        comm = request.POST.get('comment')
        obj3 = Confession.objects.get(id=pk)
        obj4 = Comment(post=obj3, name=name, comment=comm)
        obj4.save()
        return HttpResponse("Your Comment is added to the comments section successfully")
    else:
        obj1 = Confession.objects.get(id=pk)
        obj2 = Comment.objects.filter(post=obj1)
        return render(request, 'confession/comment.html', {'obj1': obj2})


def reply(request, pk):
    if request.method == 'POST':
        name = request.POST.get('name')
        repel = request.POST.get('reply')
        obj3 = Comment.objects.get(id=pk)
        obj4 = Reply(comment=obj3, name=name, reply=repel)
        obj4.save()
        return HttpResponse("Your Reply is added Successfully in reply section")
    else:
        obj1 = Comment.objects.get(id=pk)
        obj2 = Reply.objects.filter(comment=obj1)
        return render(request, 'confession/reply.html', {'obj1': obj2})