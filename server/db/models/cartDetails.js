const Sequelize = require('sequelize')
const db = require('../db')

const CartDetails = db.define('cartDetails', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  total: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  }
})


module.exports = CartDetails
