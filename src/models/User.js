const { Model,DataTypes } = require('sequelize');


class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            user: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            idade: DataTypes.INTEGER,
            profissao: DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Article)
    }
}

module.exports = User;