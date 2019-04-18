const router = require('express').Router()
const {Cart, User} = require('../db/models/index.js')

router.get('/', async (req, res, next) => {
  try {
    const carts = await Cart.findAll()
    res.json(carts)
  } catch (error) {
    next(error)
  }
})

router.get(':/userId', async (req, res, next) => {
  try {
    const id = req.params.userId
    const cart = await Cart.findAll({where: {userId: id, isPurchased: false}})
    res.json(cart)
  } catch (error) {
    next(error)
  }
})
