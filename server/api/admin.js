const adminRouter = require('express').Router()
const {User, Order} = require('../db/models')
const checkingIfAdmin = require('../utils/admin.middleware')
const Sequelize = require('sequelize')
//add in the checkingIfAdmin after checking the routes

// GET api/admin/users
adminRouter.get('/users', async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    res.json(allUsers)
  } catch (err) {
    next(err)
  }
})

// GET api/admin/users/search
adminRouter.get('/users/search', async (req, res, next) => {
  try {
    const searchedUsers = await User.findAll({
      where: {
        name: {
          [Sequelize.Op.substring]: req.query.userSearch
        }
      }
    })
    res.json(searchedUsers)
  } catch (err) {
    next(err)
  }
})

// GET api/admin/users/:userId
adminRouter.get('/users/:userId', async (req, res, next) => {
  try {
    const specificUser = await User.findByPk(req.params.userId)
    res.json(specificUser)
  } catch (err) {
    next(err)
  }
})

// DELETE api/admin/users/:userId
adminRouter.delete('/users/:userId', async (req, res, next) => {
  try {
    const id = Number(req.params.userId)
    await User.destroy({where: {id}})
    res.status(204).send('user deleted')
  } catch (err) {
    next(err)
  }
})

// PUT api/admin/users/:userId/make-admin
adminRouter.put('/users/:userId/make-admin', async (req, res, next) => {
  try {
    const specificUser = await User.findByPk(req.params.userId)
    await specificUser.update({
      isAdmin: true
    })
    res.status(200).send(specificUser)
  } catch (err) {
    next(err)
  }
})

//PUT api/admin/users/:userId/remove-admin
adminRouter.put('/users/:userId/remove-admin', async (req, res, next) => {
  try {
    const specificUser = await User.findByPk(req.params.userId)
    await specificUser.update({
      isAdmin: false
    })
    res.status(200).send(specificUser)
  } catch (err) {
    next(err)
  }
})

// DELETE api/admin/users/:userId
adminRouter.delete('/users/:userId', async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.userId)
    await userToDelete.destroy()
    res.status(204).send('user deleted')
  } catch (err) {
    next(err)
  }
})

// PUT api/admin/users/:userId/reset-password
adminRouter.put('/users/:userId/reset-password', async (req, res, next) => {
  try {
    const userToUpdate = await User.findByPk(req.params.userId)
    await userToUpdate.update({
      needsPwReset: true
    })
    res.status(200).json(userToUpdate)
  } catch (err) {
    next(err)
  }
})

//Orders
//GET /api/admin/orders
adminRouter.get('/orders', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll()
    res.json(allOrders)
  } catch (err) {
    next(err)
  }
})

adminRouter.get('/orders/search', async (req, res, next) => {
  try {
    const status = req.query.status
    const allOrders = await Order.findAll({
      where: {
        status: status
      }
    })
    res.json(allOrders)
  } catch (err) {
    next(err)
  }
})

adminRouter.get('/orders/:orderId', async (req, res, next) => {
  try {
    const singleOrder = await Order.findByPk(req.params.orderId)
    res.json(singleOrder)
  } catch (err) {
    next(err)
  }
})

adminRouter.delete('/orders/:orderId', async (req, res, next) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.orderId
      }
    })
    res.status(204).send('deleted')
  } catch (err) {
    next(err)
  }
})

module.exports = adminRouter
