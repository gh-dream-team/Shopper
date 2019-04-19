const router = require('express').Router()
const {Cart, Item, Product} = require('../db/models/index.js')

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
    const id = req.user.id
    const cart = await Cart.findAll({
      where: {userId: id, isPurchased: false},
      include: [{model: Item, include: {model: Product}}]
    })
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const id = req.user.id
    // finding the users cart
    const cart = await Cart.findOne({where: {userId: id, isPurchased: false}})
    // find item OR create an Item when a user adds a product to cart
    const item = await Item.findOne({
      where: {
        productId: req.body.id,
        cartId: cart.id
      }
    })
    if (item) {
      await item.increment('quantity')
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
