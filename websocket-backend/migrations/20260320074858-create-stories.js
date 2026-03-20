'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stories', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },

      user_id: Sequelize.INTEGER,
      images_stories: Sequelize.STRING,
      title: Sequelize.TEXT,

      viewers: {
        type: Sequelize.TEXT,
        defaultValue: '0'
      },

      stories_user_id: {
        type: Sequelize.TEXT,
        defaultValue: '[]'
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('stories');
  }
};