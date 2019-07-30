const Sequelize = require('sequelize')
const db = require('../db')

const ProductCategory = db.define('productCategory', {
  productId: Sequelize.INTEGER,
  categoryId: Sequelize.INTEGER
})

module.exports = ProductCategory
