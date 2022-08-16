'use strict'
const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING
  })

  return user
}
class users extends model {
  static associate (models) {
    // define association here
    users.hasOne(models.Accounts, {
      foreignKey: 'user_Id',
      as: 'Accounts',
      onDelete: 'CASCADE'
    })
    // users.hasMany(models.Department, {
    //   foreignKey: 'user_Id',
    //   as: 'Department',
    //   onDelete: 'CASCADE'
    // })
  }
}
/*users.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      gender: DataTypes.STRING
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'users'
    }
  )
  return users
}
*/
