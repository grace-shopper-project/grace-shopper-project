const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  let page = req.query.page
  if (!page) page = 1
  let offset = 40 * (page - 1)
  try {
    let allProducts
    if (page) {
      allProducts = await Product.findAll({
        limit: 40,
        offset: offset
      })
    } else {
      allProducts = await Product.count()
    }
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})
