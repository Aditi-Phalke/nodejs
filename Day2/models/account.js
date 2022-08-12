'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsTo(models.users, {
        foreignKey: 'user_Id',
        as: 'users'
      });
    };
  }
  Account.init({
    Currency: DataTypes.INTEGER,
    Balance: DataTypes.INTEGER,
    user_Id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'Account',
    modelName: 'Account',
  });
  return Account;
};