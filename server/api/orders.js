const orderRouter = require('express').Router()
const {Order, Cart} = require('../db/models')

orderRouter.post('/', async (req, res, next) => {
  try {
    const orders = await Order.create({
      status: req.body.status,
      address: req.body.address,
      subTotal: req.body.subTotal,
      userId: req.body.userId
    })

    res.json(orders)
  } catch (err) {
    next(err)
  }
})

orderRouter.put('/:orderId', async (req, res, next) => {
  try {
    let order = await Order.findByPk(req.params.orderId)
    if (!order) {
      res.sendStatus(404)
    }
    const updateOrder = await order.update(req.body)
    return res.json(updateOrder)
  } catch (err) {
    next(err)
  }
})

orderRouter.delete('/:orderId', (req, res, next) => {
  try {
    Cart.destroy({
      where: {
        id: req.body.cartId
      }
    })
  } catch (err) {
    next(err)
  }
})

module.exports = orderRouter
