const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/reviews', require('./reviews'))
router.use('/orders', require('./orders'))
router.use('/admin', require('./admin'))
router.use('/guest', require('./guest'))
router.use('/cart', require('./cart'))
router.use('/category', require('./category'))
router.use('/stripe', require('./stripe'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
