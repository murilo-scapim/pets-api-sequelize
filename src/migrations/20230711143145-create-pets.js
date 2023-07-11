'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'owner_id',
        references: {
          model: 'owners',
          key: 'id',
        },
      },
    }, { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pets');
  }
};