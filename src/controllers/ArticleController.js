
const Article = require('../models/Article');
const Category = require('../models/Category');



module.exports = {

    async index(req,res){
        const articles = await Article.findAll();

        return res.json(articles);
    },

    async create(req,res){
        const category_id  = parseInt(req.params.id);
        const { name,description,user_id } = req.body

        const category = await Category.findByPk(category_id);

        if(!category){
            return res.statusCode(400).json({ message:"Categoria não encontrada!" });
        }

        if(name == undefined || description == undefined || user_id == undefined){
            return res,statusCode(400).json({ message:"Dados inválidos!" });
        }

        const new_article = await Article.create({ 
            name,
            description,
            user_id,
            category_id 
        });

        return res.json(new_article);
    },

    async showArticle(req,res){
        const { categoryId } = req.params;

        const articles = await Category.findByPk(categoryId,{
            include: { association: 'categories' }
        })

        return res.json(articles);
    }
}