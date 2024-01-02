# API RESTful com Express.js e MongoDB
## 📖 Descrição
Este é um sistema de cadastro de usuários em Node.js que utiliza o framework Express.js e a biblioteca Mongoose para criar uma API RESTful para operações CRUD (Create, Read, Update, Delete) em um banco de dados MongoDB.

## 🛠️ Rotas
POST /users: Cria uma novo usuário no banco de dados.

![image](https://github.com/lucasrbordignon/user-crud/assets/89108628/c4538cd2-e62f-4a96-9d29-1fc077f3e37d)

GET /users: Retorna todos os usuários no banco de dados.

![image](https://github.com/lucasrbordignon/user-crud/assets/89108628/01d77409-7610-4105-a6d7-66e3cd09be15)

GET /users/:id: Retorna um usuário com um ID específico.

![image](https://github.com/lucasrbordignon/user-crud/assets/89108628/7c6d1595-dd67-46ac-bcf3-393f1f82b458)

PATCH /users/:id: Atualiza os dados de um usuário pessoa com base em seu ID.

![image](https://github.com/lucasrbordignon/user-crud/assets/89108628/753a88d2-774f-4c18-a7f8-60a4626fa452)

DELETE /users/:id: Exclui um usuário com base em seu ID.

![image](https://github.com/lucasrbordignon/user-crud/assets/89108628/23db407b-6dc0-490a-815b-2fdab6a51bdb)

# Executando Localmente
Clone o projeto
```
  git init
  git@github.com:lucasrbordignon/user-crud.git
```
Entre no diretório do projeto
```
  cd user-crud
```
Instale as dependências
```
  npm install
```
Inicie o servidor
```
  npm run dev
```
