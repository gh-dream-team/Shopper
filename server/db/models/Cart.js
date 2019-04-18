const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('carts', {
  itemIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Cart
