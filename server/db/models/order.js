const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  checkedOut: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  items: {
    type: Sequelize.TEXT
  }
})

module.exports = Order
