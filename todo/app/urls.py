# Importando dependencias
from django.contrib import admin
from django.urls import path

# Importando views
from app.views import todo_list
from app.views import todo_detail_change_and_delete

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', todo_list),
    path('<int:pk>/', todo_detail_change_and_delete),
]