const Category = require('../models/Category');

module.exports = {
    async index(req,res){
        const name = req.body.name;

        const category = await Category.create({ name });

        return res.json(category);
    }
}