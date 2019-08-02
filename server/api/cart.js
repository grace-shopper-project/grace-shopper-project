const cartRouter = require('express').Router()
const Cart = require('../db/models/cart')
const CartDetails = require('../db/models/cartDetails')
const Product = require('../db/models/product')
const User = require('../db/models/user')

cartRouter.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const cart = await Cart.findOne({
        where: {userId: req.user.id},
        include: [Product, User]
      })
      res.json(cart)
    } else {
      const cart = await Cart.findOne({
        where: {sessionId: req.sessionID},
        include: [Product]
      })
      res.json(cart)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = cartRouter
