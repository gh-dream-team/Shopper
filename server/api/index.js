const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/carts', require('./cart'))
router.use('/session', require('./session'))
router.use('/guestpurchases', require('./guestPurchases'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
