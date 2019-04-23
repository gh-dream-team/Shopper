const router = require('express').Router()
const {GuestPurchases} = require('../db/models/index.js')

router.get('/', async (req, res, next) => {
  try {
    if(!req.user){
      res.send('Acess denied')
    }
    else if(req.user.admin) {
      const purchases = await GuestPurchases.findAll()
      res.json(purchases)
    }
    else{
      res.send('Access denied')
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const purchase = await GuestPurchases.create({
      guestName: req.body.guestName,
      email: req.body.email,
      address: req.body.address,
      cart: req.body.cart
    }) //deconstruct the object body
    res.json(purchase)
  } catch (err) {
    console.log('error in the guestPurchase API')
    next(err)
  }
})

module.exports = router
