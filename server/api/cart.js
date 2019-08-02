const cartRouter = require('express').Router()
const Cart = require('../db/models/cart')
const CartDetails = require('../db/models/cartDetails')
const Product = require('../db/models/product')
const User = require('../db/models/user')

cartRouter.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const data = await Cart.findOrCreate({
        where: {userId: req.user.id},
        include: [Product, User]
      })
      const cart = data[0].dataValues
    } else {
      const data = await Cart.findOrCreate({
        where: {sessionId: req.sessionID},
        include: [Product]
      })
      const cart = data[0].dataValues
    }
  } catch (err) {
    next(err)
  }
})

cartRouter.put('/', async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        userId: req.body.user.id
      }
    })

    if (req.body.event === 'add_to_cart') {
      const cartDetails = await CartDetails.create({
        where: {
          cartId: cart.id
        }
      })
      const updatedCartDetails = await cartDetails.update({
        productId: req.body.productId,
        quantity: req.body.quantity
      })
    }
    const cartDetails = await CartDetails.findOne({
      where: {
        cartId: req.params.cartId,
        productId: req.body.productId
      }
    })
    const updatedCartDetails = await cartDetails.update({
      quantity: req.body.quantity
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = cartRouter

//came from get '/' route
// if (req.user) {
//   const cart = await Cart.findOne({
//     where: {userId: req.user.id},
//     include: [Product, User]
//   })
//   if(!cart){
//     cart = [];
//     res.json(cart)
//   }
//   res.json(cart)
// } else {
//   const cart = await Cart.findOne({
//     where: {sessionId: req.sessionID},
//     include: [Product]
//   })
//   if(!cart){
//     cart = [];
//     res.json(cart)
//   }
//   res.json(cart)
// }
