const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  price: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    validate: {
      isNumeric: true
    }
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Product
