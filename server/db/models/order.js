const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('./product')
const OrderDetails = require('./orderDetails')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('processing', 'cancelled', 'completed'),
    defaultValue: 'processing'
  },
  address: Sequelize.STRING,
  subtotal: Sequelize.FLOAT
  // items: {
  //   type: Sequelize.ARRAY(Sequelize.JSON),
  //   allowNull: false
  // }
})

Order.beforeUpdate(async orderInstance => {
  const allProducts = await OrderDetails.findAll({
    where: {
      orderId: orderInstance.id,
      include: [{Model: Product}]
    }
  })
  let price = 0
  allProducts.forEach(product => {
    price += product.price * product.orderQuanity
  })
  orderInstance.subtotal = price
})

//this hook isn't going to work; need to figure out what our allProducts array looks like
//after seeding the db

module.exports = Order
