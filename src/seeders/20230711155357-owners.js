'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('owners',
      [
        {
          name: 'Bob Zoom',
          email: 'bob@zoom.com',
        },
        {
          name: 'John Doe',
          email: 'john@doe.com',
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('owners', null, {});
  },
};