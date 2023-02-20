'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class characteristics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // TEMPLATE FOR FOREIGN KEY PARENT!
      this.hasMany(models.characteristics_values, { foreignKey: 'characteristic_id' })
      this.belongsTo(models.reviews_meta, { foreignKey: 'product_id' })
    }
  }
  characteristics.init({
    characteristic_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: DataTypes.INTEGER,
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'characteristics',
    timestamps: false,
  });
  return characteristics;
};