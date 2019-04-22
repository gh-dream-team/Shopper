const router = require('express').Router()
const {GuestPurchases} = require('../db/models/index.js')

router.get('/', async (req, res, next) => {
  try {
    const purchases = await GuestPurchases.findAll()
    console.log(purchases)
    res.json(purchases)
  } catch (error) {
    next(error)
  }
})

module.exports = router
