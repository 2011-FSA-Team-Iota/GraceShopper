const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  imgUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  },
  inventory: {
    type: Sequelize.INTEGER
  }
})

module.exports = Product
