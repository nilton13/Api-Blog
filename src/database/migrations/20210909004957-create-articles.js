'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
     return  queryInterface.createTable('articles', { 
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
       description:{
         type: Sequelize.TEXT,
         allowNull: false,
       },
       created_at:{
         type: Sequelize.DATE,
         allowNull: false
       },
       updated_at:{
        type: Sequelize.DATE,
        allowNull: false
       },
       category_id:{
         type: Sequelize.INTEGER,
         allowNull: false,
         references:{ model: 'categories', key: 'id' },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       },
       user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },        
      });
     
  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.dropTable('articles');
     
  }
};