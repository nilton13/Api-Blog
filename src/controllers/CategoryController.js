const Category = require('../models/Category');

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

    
}