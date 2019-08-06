const router = require('express').Router()
const {Product, Category} = require('../db/models')
const Sequelize = require('sequelize')

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

router.get('/:categoryId', async (req, res, next) => {
  try {
    const allProducts = await Category.findAll({
      where: {
        id: req.params.categoryId
      },
      include: [Product],
      // limit: 28,
      // offset: offset,
      order: [['id', 'ASC']]
    })
    res.json(allProducts[0].products)
  } catch (err) {
    next(err)
  }
})

module.exports = router
