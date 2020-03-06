Nome: Geovani Silva Cavalcante

# Teste: Desenvolvedor Web
Desenvolvimento de uma API e de um Client. 

Esse projeto foi desenvolvido com a linguagem Javascript juntamente das seguintes tecnologias:

BackEnd
  - Foi utilizado o NodeJs para a construção da API
  - Framework Express 
  - Sequelize como ORM
  - Postgres como banco de dados
  
FrontEnd
  - Foi utilizado o ReactJs para a construção do Client.


# Como executar este projeto

Para executar esta aplicação, precisará: Node.js v12.9 ou maior + Yarn v1.21 ou maior instalada no computador, Banco de dados Postgres.

Executando o backend

```
# Navegue até a pasta
$ cd teste-dev-web/backend

# Instale as dependências
$ yarn
```

```
Crie o arquivo .env e configure as variáveis de conexão com o banco de dados. Use o modelo que está em .env.example
```

Com isso configurado será necessário rodar a migration de Clientes para criar a tabela no banco.
Antes disso é preciso que a database já tenha sido criada para criar a tabela

# Execute na pasta do projeto (backend): 

```
$ yarn sequelize db:migrate
```

Feito isso, já será possível realizar requisições com a API através da url base
http://localhost:3333, basta startar o server com o seguinte comando:

```
$ yarn dev

```
# São 5 rotas possíveis:

GET - '/clientes'                      	 
Lista todos os clientes

GET - '/clientes/filter/:namec'         
Listar clientes baseados na busca pelo nome do cliente

GET - '/clientes/show/:id'             
 Busca um cliente especifico para fins de edição/deleção

POST - '/clientes'                      
Realiza o cadastro de clientes, e recebe o seguinte corpo na requisição:

    {
      "name": "Geovani Cavalcante",
      "email": "geovanisilva@gmial.com",
      "tags": "Node, React, React Native, Javascript"
    }
    
    
PUT - '/clientes/:id'                   
Realiza a edição de um cliente baseado no id passado nos parametros da requisição. O corpo é o mesmo do POST

DELETE '/clientes/:id'                  
Realiza a ação de deletar da base de dados um cliente específico


# Para dar o start na aplicação basta rodar o seguinte script:
```
$ yarn dev
```


# Executando o frontend
```
# Navegue até a pasta
$ cd teste-dev-web/frontend

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start

#Abra no navegador
http://localhost:3000/

```

