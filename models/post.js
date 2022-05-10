const DataTypes = require('sequelize')
const database = require('../config/db')
const Author = require('./author')

const Post = database.define('post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  author: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Author,
      key: 'id'
    }
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = Post
