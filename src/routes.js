const express = require('express');
const CategoryController = require("./controllers/CategoryController");
const UserController = require("./controllers/UserController");
const ArticleController = require("./controllers/ArticleController");

const LoginAuth = require("./middleware/LoginAuth");
 
const routes = express.Router();

//ROTAS DE CATEGORIAS
routes.post('/category', CategoryController.create);
routes.get('/category/:id', CategoryController.showArticle);

// ROTAS DE USUÁRIOS
routes.get('/users', LoginAuth,UserController.index);  
routes.post('/user', UserController.create);
routes.get('/user/:id', UserController.showArticle);
routes.post('/login', UserController.login);

//ROTAS DE ARTIGOS
routes.get('/articles', ArticleController.index);
routes.post('/article/:id', ArticleController.create);


module.exports = routes;