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

router.put('/:productId', async (req, res, next) => {
  try {
    const productId = await Product.findByPk(req.params.id)
    if (productId) {
      const updatedProductInventory = await Product.update(req.body, {
        where: {id : req.params.id},
        returning: true,
        plain: true,
      })
      res.json(updatedProductInventory[1])
    }
    else{
      res.sendStatus(500).json({})
    }
  } catch (error) {
    next (error)
  }
})

module.exports = router
