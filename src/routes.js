const express = require('express');
const CategoryController = require("./controllers/CategoryController");
 
const routes = express.Router();

routes.post('/category', CategoryController.index);

module.exports = routes;