const router = require('express').Router()

router.get('/', (req, res, next) => {
  try {
    res.json(req.session.cart)
  } catch (error) {
    next(error)
  }
})

router.put('/:productId', (req, res, next) => {
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

module.exports = router
