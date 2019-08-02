const router = require('express').Router()
const {Product} = require('../db/models')

router.get('/', async (req, res, next) => {
  let page = req.query.page
  if (!page) page = 1
  let offset = 28 * (page - 1)
  try {
    let allProducts
    if (page) {
      allProducts = await Product.findAll({
        limit: 28,
        offset: offset,
        order: [['id', 'ASC']]
      })
    } else {
      allProducts = await Product.count()
    }
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const product = await Product.findOne({where: {id}})
    res.json(product)
  } catch (error) {
    next(error)
  }
})

//admin route
router.post('/', async (req, res, next) => {
  try {
    const {name, description, imageUrl, price, inventoryQuantity} = req.body
    const product = await Product.create({
      name,
      description,
      imageUrl,
      price,
      inventoryQuantity
    })
    res.json(product)
  } catch (error) {
    console.log(error)
  }
})

//admin route
router.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const product = await Product.findByPk(id)
    if (!product) {
      return res.sendStatus(404)
    }
    // grabbing updated information and sending it to the database to update the product info
    // need to add logic to account for unchanged fields
    // const { name, description, price, inventoryQuantity  } = req.body;
    // const updatedProduct = await product.update({ name, description, price, inventoryQuantity});
    // res.json(updatedProduct);
  } catch (error) {
    console.log(error)
  }
})

//admin route
router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    await Product.destroy({where: {id}})
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
