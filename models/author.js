const DataTypes = require('sequelize')
const database = require('../config/db')

const Author = database.define('author', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  followers: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = Author
