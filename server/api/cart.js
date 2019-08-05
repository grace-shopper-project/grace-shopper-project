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
    req.body = req.body[0]

    if (req.body.userId) {
      //changed for postman
      cart = await Cart.findOne({
        where: {
          userId: req.body.userId //changed for postman
        }
      })
    } else {
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
        if (req.body.quantity + cartDetails.quantity <= inventory) {
          await cartDetails.update({
            quantity: (cartDetails.quantity += req.body.quantity)
          })
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (req.body.quantity <= inventory) {
          await cartDetails.update({
            quantity: req.body.quantity
          })
        }
      }
    } else {
      if (req.body.quantity <= inventory) {
        await cartDetails.update({
          quantity: req.body.quantity
        })
      }
      await cartDetails.create({
        quantity: req.body.quantity,
        cartId: cart.id,
        productId: req.body.productId
      })
    }

    //need to get the new cart
    const updatedCart = await Cart.findByPk(cart.id, {
      include: [Product]
    })

    res.json(updatedCart)
  } catch (err) {
    console.log(err)
  }
})

cartRouter.delete('/:cartId', async (req, res, next) => {
  try {
    req.body = req.body[0] //in for postman
    const cartDetails = await CartDetails.findOne({
      where: {
        cartId: req.params.cartId,
        productId: req.body.productId
      }
    })
    if (cartDetails) await cartDetails.destroy()
    const updatedCart = await Cart.findByPk(req.params.cartId)
    res.json(updatedCart)
  } catch (err) {
    next(err)
  }
})

module.exports = cartRouter
