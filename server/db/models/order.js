const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('./product')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('created', 'processing', 'cancelled', 'completed'),
    defaultValue: 'approved'
  },
  subtotal: Sequelize.INTEGER,
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

Order.beforeCreate(async orderInstance => {
  const product = await Product.findbyPk(orderInstance.productId)
  orderInstance.subtotal = product.price * orderInstance.quantity
})

module.exports = Order
