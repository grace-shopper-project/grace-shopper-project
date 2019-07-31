const adminRouter = require('express').Router()
const {User} = require('../db/models')
const checkingIfAdmin = require('../utils/admin.middleware')

// GET api/admin/users
adminRouter.get('/users', checkingIfAdmin, async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    res.send(allUsers)
  } catch (err) {
    next(err)
  }
})

// GET api/admin/users/:userId
adminRouter.get('/users/:userId', checkingIfAdmin, async (req, res, next) => {
  try {
    const specificUser = await User.findByPk(req.params.userId)
    res.send(specificUser)
  } catch (err) {
    next(err)
  }
})

// PUT api/admin/users/:userId/makeAdmin
adminRouter.put('/users/:userId', checkingIfAdmin, async (req, res, next) => {
  try {
    const specificUser = await User.findByPk(req.params.userId)
    await specificUser.update({
      where: {
        isAdmin: true
      }
    })
    res.status(200).send('user is now admin')
  } catch (err) {
    next(err)
  }
})

// DELETE api/admin/users/:userId
adminRouter.delete(
  '/users/:userId',
  checkingIfAdmin,
  async (req, res, next) => {
    try {
      const userToDelete = await User.findByPk(req.params.userId)
      await userToDelete.destroy()
      res.status(204).send('user deleted')
    } catch (err) {
      next(err)
    }
  }
)

module.exports = adminRouter
