const router = require('express').Router()
const {Product} = require('../db/models/index.js')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const id = req.params.productId
    const product = await Product.findByPk(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

module.exports = router
