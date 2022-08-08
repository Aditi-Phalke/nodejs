'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasOne(models.Account,{
        foreignKey: 'user_Id',
        as: 'Account',
        onDelete: 'CASCADE'
      });
    };
  }
  users.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'users',
  });
  return users;
};