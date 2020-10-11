// const Sequelize = require('sequelize')
// const db = require('../db')

// const Order = db.define('cart', {
//   status: {
//     type: Sequelize.ENUM(['completed', 'created', 'pending']),
//     defaultValue: 'created'
//   }
// })

// module.exports = Order

const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    //What is the purpose of processing
    type: Sequelize.ENUM('created', 'completed', 'processing'),
    defaultValue: 'created'
  }
})

module.exports = Order
