'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('block_user', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      sender_id: Sequelize.STRING,
      receiver_id: Sequelize.STRING
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('block_user');
  }
};