# Importando dependencias
from app.views import TodoViewSet
from django.contrib import admin
from rest_framework.routers import DefaultRouter # Já cria todas as rotas necessárias com base nas views

router = DefaultRouter()
router.register('', TodoViewSet)
urlpatterns = router.urls
