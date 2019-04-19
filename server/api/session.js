const router = require('express').Router()
const {Product} = require('../db/models/index.js')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', (req, res, next) => {
  try {
    res.json(req.session.cart)
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', (req, res, next) => {
  let id = req.params.productId

  if (req.session.cart) {
    if (req.session.cart[id]) {
      req.session.cart[id] = req.session.cart[id] + 1
    } else {
      req.session.cart[id] = 1
    }
  } else {
    req.session.cart = {}
    req.session.cart[id] = 1
  }
  res.send(req.session.cart)
})

router.put('/many', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {
        id: {
          [Op.in]: req.body
        }
      }
    })
    res.json(products)
  } catch (error) {
    next(error)
  }
})

module.exports = router
