const adminRouter = require('express').Router()
const {User} = require('../db/models')
const checkingIfAdmin = require('../utils/admin.middleware')
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

// GET api/admin/users/:userId
adminRouter.get('/users/:userId', async (req, res, next) => {
  try {
    const specificUser = await User.findByPk(req.params.userId)
    res.json(specificUser)
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
    res.status(200).send('user is now admin')
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
//note: I'm pretty sure this is NOT safe; we need to figure out how to safely get the user to reset their
//pw during their next login.
adminRouter.put('/users/:userId/reset-password', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    await user.update({
      needsPwReset: true
    })
    res.status(204).send('password reset added to user')
  } catch (err) {
    next(err)
  }
})

module.exports = adminRouter
