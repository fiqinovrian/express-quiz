'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init({
    angka1: DataTypes.FLOAT,
    angka2: DataTypes.FLOAT,
    tipe: DataTypes.STRING,
    hasil: DataTypes.FLOAT,
    formula: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};