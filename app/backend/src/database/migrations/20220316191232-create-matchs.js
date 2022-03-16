'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matchs', {
      id: {
        allowNull: false,
        autoIncremente: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      homeTeam: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      homeTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      awayTeam: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      awayTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      inProgress: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Matchs');
  }
};
