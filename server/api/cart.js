const cartRouter = require('express').Router()
const Cart = require('../db/models/cart')
const CartDetails = require('../db/models/CartDetails')
const Product = require('../db/models/product')
const User = require('../db/models/user')

cartRouter.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const cart = await Cart.findOne({
        where: {userId: req.user.id},
        include: [{model: Product, User}]
      })
      res.json(cart)
    } else {
      if (req.session.cart && req.session.cart.length > 0) {
        res.json(req.session.cart)
      }
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})



module.exports = cartRouter
