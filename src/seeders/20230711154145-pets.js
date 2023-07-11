'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pets',
      [
        {
          name: 'Duke',
          owner_id: 1,
        },
        {
          name: 'Thor',
          owner_id: 1,
        },
        {
          name: 'Toddy',
          owner_id: 2,
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pets', null, {});
  },
};