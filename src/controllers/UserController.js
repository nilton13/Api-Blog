const Users = require('../models/User');

module.exports = {
    async create(req,res){
        const { name,user,email,password,idade,profissao } = req.body;

        const user_new = await Users.create({ name,user,email,password,idade,profissao });

        return res.json(user_new);
    },

    async index(req,res){
        const users = await Users.findAll();

        return res.json(users);
    }
}