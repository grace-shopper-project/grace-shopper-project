const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const Review = require('./review')
const Category = require('./category')

User.hasMany(Order)
Order.belongsTo(User)
Order.hasMany(Product)
Product.belongsToMany(Order)
Product.belongsToMany(Category)
User.hasMany(Review)
Review.belongsTo(User)
Review.belongsTo(Product)
Product.hasMany(Review)

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
  User
}
