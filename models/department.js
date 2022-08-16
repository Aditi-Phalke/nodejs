'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.belongsTo(models.users, {
        foreignKey: 'user_Id',
        as: 'users'
      });
    }
  }
  Department.init({
    dtName: DataTypes.STRING,
    user_Id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'Department',
    modelName: 'Department',
  });
  return Department;
};