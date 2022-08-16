'use strict'

const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Accounts', {
    Currency: DataTypes.INTEGER,
    Balance: DataTypes.INTEGER,
    user_Id: DataTypes.INTEGER
  })

  return Account
}

class Accounts extends model {
  static associate (models) {
    Accounts.belongsTo(models.users, {
      foreignKey: 'user_Id',
      as: 'users'
    })
  }
}
/*Account.init({
    Currency: DataTypes.INTEGER,
    Balance: DataTypes.INTEGER,
    user_Id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'Account',
    modelName: 'Account',
  });
  return Account;
};*/
