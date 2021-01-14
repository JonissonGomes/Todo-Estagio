# Importando dependencias
from django.contrib import admin
from django.urls import path

# Importando views
from app.views import TodoListAndCreate, TodoChangeAndDelete

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TodoListAndCreate.as_view()),
    path('<int:pk>/', TodoChangeAndDelete.as_view()),
]