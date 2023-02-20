'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class characteristics_values extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // TEMPLATE FOR FOREIGN KEY CHILD!
      this.belongsTo(models.characteristics, { foreignKey: 'characteristic_id' })
    }
  }
  characteristics_values.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
    characteristic_id: {
      type: DataTypes.INTEGER,
    },
    review_id: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'characteristics_values',
  });
  return characteristics_values;
};