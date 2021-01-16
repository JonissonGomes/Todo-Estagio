from rest_framework import serializers # Importar o serializers
from app.models import Todo # Importar o model 

#Criar classe serializer do models
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
