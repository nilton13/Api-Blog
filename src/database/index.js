const Sequelize = require("sequelize");
const dbConfig = require('../config/database');


const Category = require('../models/Category');
const User = require('../models/User');
const Article = require('../models/Article');


const connection = new Sequelize(dbConfig);

Category.init(connection);
User.init(connection);
Article.init(connection);

Article.associate(connection.models);

module.exports = connection;