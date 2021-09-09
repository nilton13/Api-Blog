const Article = require('../models/Article');
const { index } = require('./UserController');

module.exports = {

    async index(req,res){
        const articles = await Article.findAll();

        return res.json(articles);
    }
}