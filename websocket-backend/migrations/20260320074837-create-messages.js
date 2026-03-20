'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messages', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },

      sender_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE'
      },

      receiver_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE'
      },

      content: Sequelize.TEXT,

      status: {
        type: Sequelize.ENUM('read', 'unread'),
        defaultValue: 'unread'
      },

      timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

      images: Sequelize.JSON,
      delete_user_id: Sequelize.JSON
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('messages');
  }
};