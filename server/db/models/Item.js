const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('items', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = Item
