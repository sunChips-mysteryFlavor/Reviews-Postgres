'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews_meta', {
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ratings_count_1: {
        type: Sequelize.INTEGER
      },
      ratings_count_2: {
        type: Sequelize.INTEGER
      },
      ratings_count_3: {
        type: Sequelize.INTEGER
      },
      ratings_count_4: {
        type: Sequelize.INTEGER
      },
      ratings_count_5: {
        type: Sequelize.INTEGER
      },
      recommended_true: {
        type: Sequelize.INTEGER
      },
      recommended_false: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews_meta');
  }
};