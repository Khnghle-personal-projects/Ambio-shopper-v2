const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('cart', {
  status: {
    type: Sequelize.ENUM(['completed', 'created', 'pending']),
    defaultValue: 'created'
  }
})

module.exports = Order
