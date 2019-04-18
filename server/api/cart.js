const router = require('express').Router()
const {Cart, User, Product, Item} = require('../db/models/index.js')

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

//We want to initialize a new user with a new cart with an item
router.post('/', async (req, res, next) => {
  try {
    const id = req.user.id
    const cart = await Cart.create(req.body, {userId: id})
    // const product = await Product.get(req.body.id)
    // const newItem = await Item.create()
    // const newCart = await Cart.create(req.body, {where: })
    res.json(cart)
  } catch (error) {
    next(error)
  }
})
