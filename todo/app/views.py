# Importar dependencias
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

# Importar models
from app.models import Todo

# Importar serializers
from app.serializers import TodoSerializer

# Criando métodos de requisição(Refatorando)


class TodoListAndCreate(APIView):
    def get_object(self, pk):
        try:
            return Todo.objects.get(pk=pk)  # Irá buscar as chaves primearias no banco
        except Todo.DoesNotExist:
           raise NotFound()

    # Método GET
    def get(self, request, ):
        todo = Todo.objects.all()  # Retorna todos os objetos do model
        serializer = TodoSerializer(todo, many=True) # Compila todos os dados do banco em formato Json
        return Response(serializer.data) # Retorna os dados do banco em formato Json

    # Método POST
    def post(self, request,):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid(): # Faz a validação dos dados requeridos no request
            serializer.save() # Salva os dados do request
            return Response(serializer.data, status=status.HTTP_201_CREATED) # Retorna Sucesso no request
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Retorna Erro na requisição dos dados

class TodoChangeAndDelete(APIView):
    # Método PUT
    def put(self, request, pk):
        todo = self.get_object(pk)
        serializer = TodoSerializer(todo, data=request.data)  # Ira armazenar as 2 chaves(1 do banco e outra do request) em formato JSON
        if serializer.is_valid(): # Comparar os dados para validação
            serializer.save() # Salva as alterações
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND) # Retorna mensagem de erro

    # Método DELETE
    def delete(self, request, pk):
        todo = self.get_object(pk)
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)