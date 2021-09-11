const Article = require('../models/Article');
const Users = require('../models/User');
const bcrypt = require('bcrypt');
const salt = 8;
var jwt = require('jsonwebtoken');

var secret = "70459c48756f9ef63928acdce8415388a4ca7318e4dd2943bf8e678c9af11efb"

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

    async showArticle(req,res){
        const id = parseInt(req.params.id);

        const articles = await Users.findByPk(id , {
            include:{ association: 'users' }
        })


        return res.json(articles);
    },

    async login(req,res){
        const { user,password } = req.body;

        const user_login = await Users.findOne({where:{user}});   
        
        if(user_login == undefined){
            return sendStatus(400).json({
                message:'Usuário inválido'
            })
        }        
        //return res.json(user_login.password);
        
        const validation = await bcrypt.compare(password,user_login.password );

        if(validation){

            var token = jwt.sign({ user_user : user }, secret);

            res.status(200)
            res.json({ token:token });

        }else{
            res.status(406);
            res.send("Senha incorreta");
        }
        
    }

    
}