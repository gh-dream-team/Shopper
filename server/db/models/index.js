const User = require('./user')
const Product = require('./Product')
const Cart = require('./Cart')
const Item = require('./Item')
const GuestPurchases = require('./GuestPurchases')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Cart.hasMany(Item)
Item.belongsTo(Cart)
Item.belongsTo(Product)
Cart.belongsTo(User)
User.hasMany(Cart)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Cart,
  Item,
  GuestPurchases
}
