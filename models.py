from django.db import models


# Create your models here.


class Confession(models.Model):
    title = models.CharField(max_length=300, default="")
    college = models.CharField(max_length=600, default="")
    gender = models.CharField(max_length=700, default="")
    confession = models.TextField(max_length=2500, default="")
    date = models.DateTimeField(auto_now="True")
    post_likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title + " " + str(self.date) + " " + self.college


class Comment(models.Model):
    post = models.ForeignKey(Confession, on_delete=models.CASCADE)
    name = models.CharField(max_length=300)
    comment = models.TextField(max_length=150)

    def __str__(self):
        return self.post.title + " " + self.name


class Reply(models.Model):
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    name = models.CharField(max_length=300)
    reply = models.TextField(max_length=150)

    def __str__(self):
        return self.comment.name + " " + self.name


