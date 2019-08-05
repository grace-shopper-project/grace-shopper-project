const cartRouter = require('express').Router()
const Cart = require('../db/models/cart')
const CartDetails = require('../db/models/cartDetails')
const Product = require('../db/models/product')
const User = require('../db/models/user')

cartRouter.get('/', async (req, res, next) => {
  try {
    let cart
    if (req.user) {
      const data = await Cart.findOrCreate({
        where: {userId: req.user.id},
        include: [Product, User]
      })
      cart = data[0].dataValues
    } else {
      const data = await Cart.findOrCreate({
        where: {sessionId: req.sessionID},
        include: [Product]
      })
      cart = data[0].dataValues
    }
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

cartRouter.put('/', async (req, res, next) => {
  try {
    let cart
    const quantity = Number(req.body.quantity)
    if (req.user) {
      cart = await Cart.findOne({
        where: {
          userId: req.user.id
        }
      })
    } else {
      console.log('sessionId', req.sessionID)
      cart = await Cart.findOne({
        where: {
          sessionId: req.sessionID
        }
      })
    }
    const product = await Product.findOne({
      where: {id: req.body.productId}
    })

    const inventory = product.inventoryQuantity

    const cartDetails = await CartDetails.findOne({
      where: {
        cartId: cart.id,
        productId: req.body.productId
      }
    })
    //if we want to update a product quantity or add a product
    if (cartDetails) {
      if (req.body.add) {
        if (quantity + cartDetails.quantity <= inventory) {
          console.log('ihjwbfgihwbnfvihjwdnviwjefnviwehfbv iwehb')
          await cartDetails.update({
            quantity: (cartDetails.quantity += quantity)
          })
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (req.body.quantity <= inventory) {
          await cartDetails.update({
            quantity: quantity
          })
        }
      }
    } else {
      await CartDetails.create({
        quantity: quantity,
        cartId: cart.id,
        productId: Number(req.body.productId)
      })
    }

    const updatedCart = await Cart.findByPk(cart.id, {
      include: [Product]
    })

    res.json(updatedCart)
  } catch (err) {
    console.log(err)
  }
})

cartRouter.delete('/', async (req, res, next) => {
  try {
    let cart
    console.log(req)
    if (req.user.id) {
      cart = await Cart.findOne({
        where: {
          userId: req.user.id
        }
      })
    } else {
      cart = await Cart.findOne({
        where: {
          sessionId: req.sessionID
        }
      })
    }
    const cartDetails = await CartDetails.findOne({
      where: {
        cartId: cart.id,
        productId: req.body.productId
      }
    })
    if (cartDetails) await cartDetails.destroy()
    const updatedCart = await Cart.findByPk(cart.id)
    res.json(updatedCart)
  } catch (err) {
    next(err)
  }
})

module.exports = cartRouter
