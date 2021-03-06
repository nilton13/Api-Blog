'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
     return  queryInterface.createTable('users', { 
       id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
       },
       name:{
         type: Sequelize.STRING,
         allowNull: false
       },
       user:{
         type: Sequelize.STRING,
         allowNull: false,
         unique: true
       },
       email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
       },
       password:{
         type: Sequelize.STRING,
         allowNull: false
       },
       idade:{
         type: Sequelize.INTEGER,
         allowNull: false
       },
       profissao:{
         type: Sequelize.STRING,
         allowNull: false
       },
       created_at:{
         type: Sequelize.DATE,
         allowNull: false
       },
       updated_at:{
        type: Sequelize.DATE,
        allowNull: false
       }        
      });
     
  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
     
  }
};
