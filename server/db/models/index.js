const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const Review = require('./review')
const Category = require('./category')
const OrderDetails = require('./orderDetails')
const CartDetails = require('./cartDetails')
const ProductCategory = require('./productCategory')
const Cart = require('./cart')

User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Product, {through: OrderDetails})
Product.belongsToMany(Order, {through: OrderDetails})

Product.belongsToMany(Category, {through: ProductCategory})
Category.belongsToMany(Product, {through: ProductCategory})
Product.belongsToMany(Cart, {through: CartDetails})

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

Cart.belongsTo(User)
Cart.belongsToMany(Product, {through: CartDetails})
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Review,
  Category,
  Order
}
