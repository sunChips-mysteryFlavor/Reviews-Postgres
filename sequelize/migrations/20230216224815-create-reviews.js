'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      review_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rating: {
        type: Sequelize.INTEGER
      },
      summary: {
        type: Sequelize.TEXT
      },
      recommend: {
        type: Sequelize.BOOLEAN
      },
      response: {
        type: Sequelize.TEXT
      },
      body: {
        type: Sequelize.TEXT
      },
      date: {
        type: Sequelize.DATE
      },
      reviewer_name: {
        type: Sequelize.TEXT
      },
      helpfulness: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews');
  }
};