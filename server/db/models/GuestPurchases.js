const Sequelize = require('sequelize')
const db = require('../db')

const GuestPurchases = db.define('guestpurchases', {
  guestName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cart: {
    type: Sequelize.JSONB
  },
  total: {
    type: Sequelize.INTEGER
  }
})

//cart is a bit of temporary hack to make sure we save the data.  It saves teh cart as an object, where the key is the product id and the value is the quantity.  Eventually this should be a linked items table. The key will be returned as a string so we'll need to remember to switch back to an integer if needed.

module.exports = GuestPurchases
