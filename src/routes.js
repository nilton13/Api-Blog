const express = require('express');
const CategoryController = require("./controllers/CategoryController");
const UserController = require("./controllers/UserController");
const ArticleController = require("./controllers/ArticleController");
 
const routes = express.Router();

//ROTAS DE CATEGORIAS
routes.post('/category', CategoryController.create);
routes.get('category/:id', CategoryController.show);

// ROTAS DE USUÁRIOS
routes.get('/users',UserController.index);  
routes.post('/user', UserController.create);

//ROTAS DE ARTIGOS
routes.get('/articles', ArticleController.index);
routes.post('/article/:id', ArticleController.create);
routes.get('/category/:id', ArticleController.showArticle);


module.exports = routes;