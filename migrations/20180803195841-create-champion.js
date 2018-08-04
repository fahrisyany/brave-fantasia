'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Champions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      element: {
        type: Sequelize.STRING
      },
      rarity: {
        type: Sequelize.STRING
      },
      effect: {
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue: new Date(),

        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Champions');
  }
};
