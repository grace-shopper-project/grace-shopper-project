const router = require('express').Router()
const {Products} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Products.findAll({limit: 10})
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})
