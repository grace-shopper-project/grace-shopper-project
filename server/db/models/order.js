const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  products: Sequelize.ARRAY,
  subtotal: Sequelize.INTEGER
})

module.exports = Order

//original markup for this model included dateCreated and timeCreated. These features should already
//be available in the createdAt field at is provided in our db upon creation.

//Additionally, I think that if products is an array of product objects, each one will have a price;
//we can simply write an axios request to pull that subtotal in through a thunk creator. Therefore,
//I'm not sure if we need a subtotal datatype in our Order model.
