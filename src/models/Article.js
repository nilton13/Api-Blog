const { Model,DataTypes } = require('sequelize');


class Article extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.TEXT
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Category,{ foreignKey: 'category_id', as: 'category' }),
        this.belongsTo(models.User,{ foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Article;