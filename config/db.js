const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost:5432/miniCommunity',
  {
    dialect: 'postgres',
    define: {
      timestamps: false,
      freezeTableName: true
    }
  }
)

module.exports = sequelize
