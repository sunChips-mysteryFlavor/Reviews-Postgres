'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reviews_photo, { foreignKey: 'review_id' })
    }
  }
  reviews.init({
    product_id: DataTypes.INTEGER,
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: DataTypes.INTEGER,
    summary: DataTypes.TEXT,
    recommend: DataTypes.BOOLEAN,
    response: DataTypes.TEXT,
    body: DataTypes.TEXT,
    date: DataTypes.DATE,
    reviewer_name: DataTypes.TEXT,
    helpfulness: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reviews',
    timestamps: false,
  });
  return reviews;
};