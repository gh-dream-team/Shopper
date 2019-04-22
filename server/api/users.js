// const router = require('express').Router()
// const {User} = require('../db/models')
// module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     if(req.user.admin === true) 
// give access to all users. else send a message notifying the user that they dont have admin access
// add a admin feild to our user model. which would just be a boolean 
//     const users = await User.findAll({
//       // explicitly select only the id and email fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ['id', 'email', 'username']
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })

// in our app do we ever need to list our users? if not, we can delete this entire thing