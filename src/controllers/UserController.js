const Users = require('../models/User');
const bcrypt = require('bcrypt');
const salt = 8

module.exports = {
    async create(req,res){
        let { name,user,email,password,idade,profissao } = req.body;

        password = await bcrypt.hashSync(password,salt)

        const user_new = await Users.create({ name,user,email,password,idade,profissao });

        return res.json(user_new);
    },

    async index(req,res){
        const users = await Users.findAll();

        return res.json(users);
    },

    async login(req,res){

    },

    
}