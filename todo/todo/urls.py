from django.contrib import admin
from django.urls import path, include # Importando o Include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('todo/', include('app.urls')) # Incluindo o caminho para as rotas criadas em app
]
