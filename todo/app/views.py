# Importar dependencias
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Importar models
from app.models import Todo

# Importar serializers
from app.serializers import TodoSerializer

#Criar função para request GET e POST

@api_view(['GET','POST'])

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
    

@api_view(['GET','PUT','DELETE'])

def todo_detail_change_and_delete(request, pk):
    try:
        todo = Todo.objects.get(pk=pk) # Irá buscar as chaves primearias no banco
    except Todo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = TodoSerializer(todo) # Irá armazenar a chave primaria em um objeto JSON
        return Response(serializer.data) # Irá retornar os dados referentes aos do banco
    
    elif request.method == 'PUT':
        serializer = TodoSerializer(todo, data=request.data)  # Ira armazenar as 2 chaves(1 do banco e outra do request) em formato JSON
        if serializer.is_valid(): # Comparar os dados para validação
            serializer.save() # Salva as alterações
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND) # Retorna mensagem de erro
    
    elif request.method == 'DELETE':
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)