const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define(
  'cart',
  {
    qty: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1
      }
    }
  },
  {timestamps: false}
)

module.exports = Cart
