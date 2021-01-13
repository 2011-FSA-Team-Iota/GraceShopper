const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'No product descrition at this time.'
  },
  imgUrl: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue:
      'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 10
  }
})

module.exports = Product
