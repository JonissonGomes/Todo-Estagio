from django.db import models

class Todo(models.Model):
    name = models.CharField(max_length=200)
    stack = models.CharField(max_length=200)
    description = models.CharField(max_length=300)
    time = models.IntegerField()
    done = models.BooleanField(default=False)
    create_at = models.DateTimeField(auto_now_add=True)