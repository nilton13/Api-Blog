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

//ROTAS DE ARTIGOS
routes.get('/articles', ArticleController.index);


module.exports = routes;