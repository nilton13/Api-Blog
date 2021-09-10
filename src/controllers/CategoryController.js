const Category = require('../models/Category');
const Article =  require('../models/Article')

module.exports = {
    async create(req,res){
        const name = req.body.name;

        const category = await Category.create({ name });

        return res.json(category);
    },

    async show(req,res){
        const id = req.params.id;

        const category = await Category.findByPk(id);

        return res.json(category);

    },

    async showArticle(req,res){
        const categoryId = parseInt(req.params.id);

        const articles = await Category.findByPk(categoryId,{
            include: { association: 'categories' }
        })

        return res.json(articles);
    }
}