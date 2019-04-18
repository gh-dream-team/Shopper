const router = require('express').Router()
const {Cart, Item} = require('../db/models/index.js')

router.get('/', async (req, res, next) => {
  try {
    const carts = await Cart.findAll()
    res.json(carts)
  } catch (error) {
    next(error)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const id = req.params.userId
    const cart = await Cart.findAll({where: {userId: id, isPurchased: false}})
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const id = req.params.userId
    // finding the users cart
    const cart = await Cart.findOne({where: {userId: id, isPurchased: false}})
    // find item OR create an Item when a user adds a product to cart
    const item = await Item.findOne({where: {productId: req.body.id}})
    if (item) {
      const updatedItem = await item.increment('quantity')
      cart.update({itemIds: [...cart.itemIds, updatedItem.id]})
    } else {
      const newItem = await Item.create({
        productId: req.body.id,
        quantity: 1,
        cartId: cart.id
      })
      cart.update({itemIds: [...cart.itemIds, newItem.id]})
    }
    // put this item in Cart
    res.json(cart)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
