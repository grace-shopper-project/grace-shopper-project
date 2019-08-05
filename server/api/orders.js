const orderRouter = require('express').Router()
const {Order, Cart, User, Product, OrderDetails} = require('../db/models')

orderRouter.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [User, Product]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

orderRouter.get('/:orderId/items', async (req, res, next) => {
  try {
    const items = await OrderDetails.findAll({
      where: {
        orderId: req.params.orderId
      },
      include: [{model: Product, attributes: ['id', 'price']}]
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})
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
