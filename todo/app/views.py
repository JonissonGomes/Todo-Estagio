# Importar dependencias
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import app_view

# Importar models
from app.models import Todo

# Importar serializers
from app.serializers import TodoSerializer

#Criar função para request GET e POST

@app_view(['GET','POST'])

def todo_list(request):
    if request.method == 'GET':
        todo = Todo.objects.all() # Retorna todos os objetos do model
        serializer = TodoSerializer(todo, many=True) # Compila todos os dados do banco em formato JsonResponse
        return Response(serializer.data) # Retorna os dados do banco em formato Json
    elif request.method == 'POST':
        serializer = TodoSerializer(data=request.data) # Envia todos os dados requeridos no request
        if serializer.is_valid(): # Faz a validação dos dados requeridos no request
            serializer.save() # Salva os dados do request
            return Response(serializer.data, status=status.HTTP_201_CREATED) # Retorna Sucesso no request
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Retorna Erro na requisição dos dados
    