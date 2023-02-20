'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews_meta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.characteristics, { foreignKey: 'product_id' })
    }
  }
  reviews_meta.init({
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ratings_count_1: DataTypes.INTEGER,
    ratings_count_2: DataTypes.INTEGER,
    ratings_count_3: DataTypes.INTEGER,
    ratings_count_4: DataTypes.INTEGER,
    ratings_count_5: DataTypes.INTEGER,
    recommended_true: DataTypes.INTEGER,
    recommended_false: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'reviews_meta',
    timestamps: false,
  });
  return reviews_meta;
};