'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    const password = await bcrypt.hash('Data@1234', 10);

    await queryInterface.bulkInsert('users', [
      {
        username: 'Jaymin Modi',
        email: 'jaymin@gmail.com',
        password,
        avatar: '1.jpg',
        created_at: new Date()
      },
      {
        username: 'Jasmine Thompson',
        email: 'jasminethompson@gmail.com',
        password,
        avatar: '1.jpg',
        created_at: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};