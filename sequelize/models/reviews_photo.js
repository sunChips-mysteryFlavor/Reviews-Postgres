'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews_photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.reviews, { foreignKey: 'review_id' })
    }
  }
  reviews_photo.init({
    photo_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    review_id: DataTypes.INTEGER,
    url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'reviews_photo',
  });
  return reviews_photo;
};