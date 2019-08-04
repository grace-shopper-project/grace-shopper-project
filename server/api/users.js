const router = require('express').Router()
const {User, Review} = require('../db/models')
module.exports = router

router.use((req, res, next) => {
  // EXPRESS PLAYGROUND
  console.log('REQ.SESSION', req.session)
  if (!req.session.cartItems) {
    req.session.cartItems = []
  } else {
    req.session.cartItems.push({
      productId: 3,
      quantity: 1000
    })
  }
  next()
})
router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const user = await User.findOne({where: {id}})
    res.json(user)
  } catch (err) {
    next(err)
  }
})
router.get('/:id/reviews', async (req, res, next) => {
  try {
    const review = await Review.findAll({
      where: {
        userId: req.params.id
      },
      include: [User]
    })
    res.json(review)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!

      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
