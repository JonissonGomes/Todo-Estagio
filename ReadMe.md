# TODO-ESTAGIÁRIO

Esta aplicação é um experimento básico de lista de tarefas, e tem como finalidade a aplicação dos conceitos de Django Rest Framework e sua integração com React durante a primeira semana do estágio.



## Execução do projeto

Clone este repositório:

```
$ git clone https://github.com/JonissonGomes/Todo-Estagio
```

Abra o terminal e navegue para o seguinte diretório:

```
$ /Todo-Estagio
```

Ative o `ambiente python` utilizando o comando:

```
$ source env/bin/activate
```

Após ativação do ambiente, `entre no diretório` do o projeto django:

```
$ cd /todo
```

#### Inicialize o servidor:

```
$ python manage.py runserver
```

Pronto, o back-end está rodando e agora você pode analisar, cadastrar, editar e deletar os dados inseridos por meio da rota:

http://127.0.0.1:8000/todo/



## Inicializando Front-End

Após inicialização do back-end( citado no tópico acima ), abra um `novo terminal` e navegue até:

```
$ /Todo-Estagio/todo/frontend
```

Execute o seguinte comando para a `instalação das dependencias`:

```
$ npm install
```

Após instalar os módulos, execute o seguinte comando para `inicializar o front-end` interativo:

```
$ npm start
```

Após estes passos, você pode usar a aplicação para cadastrar e visualizar suas tarefas.



## Tecnologias e bibliotecas utilizadas:

### Python:

> > > Django
> >
> > 	- urls
> > 	- db
> >
> > Django Rest Framework
>
> 	- Serializers
> 	- Routers
> 	- Viewsets
>
> Django Cors Headers

### React:

`Axios` - Comunicação entre a API com o front end

`{ BrowserRouter, Switch, Route }` from "react-router-dom " - Criação de rotas

`{ Link }` from "react-router-dom" - Navegação entre rotas

`{ useHistory }` from "react-router-dom" - Acessar o estado de um componente

`{ useState }` from "react" - Atualização de dados em tempo real


*#RunDev #Python #Rest #React #Fullstack #JuniorDev*
