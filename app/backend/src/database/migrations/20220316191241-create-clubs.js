'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clubs', {
      id: {
        allowNull: false,
        autoIncremente: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clubName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Clubs');
  }
};
