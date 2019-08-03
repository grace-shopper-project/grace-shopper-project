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
    if (req.user) {
      cart = await Cart.findOne({
        where: {
          userId: req.body.user.id
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
    //if we want to update a product quantity or add a product
    if (cartDetails) {
      if (req.body.add) {
        await cartDetails.update({
          quantity: (cartDetails.quantity += req.body.quantity)
        })
      } else {
        await cartDetails.update({
          quantity: req.body.quantity
        })
      }
    } else {
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

// came from put '/' route
// if (req.body.event === 'add_to_cart') {
//   const cartDetails = await CartDetails.create({
//     where: {
//       cartId: cart.id
//     }
//   })
//   const updatedCartDetails = await cartDetails.update({
//     productId: req.body.productId,
//     quantity: req.body.quantity
//   })
// }

// const updatedCartDetails = await cartDetails.update({
//   quantity: req.body.quantity
// })
