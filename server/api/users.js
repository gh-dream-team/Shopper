const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if(!req.user){
      res.send('Acess denied')
    }
    else if(req.user.admin) {
      const users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email', 'username']
      })
      res.json(users)
    }
    else{
      res.send('Access denied')
    }
  } catch (err) {
    next(err)
  }
})