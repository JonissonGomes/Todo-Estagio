# Importar dependencias
from rest_framework import viewsets

# Importar models
from app.models import Todo

# Importar serializers
from app.serializers import TodoSerializer

# Criando métodos de requisição(Refatorando EXTREMAMENTE)

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
