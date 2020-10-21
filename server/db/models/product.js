const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    unique: true
  },
  pic: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://pbs.twimg.com/profile_images/613518317584805888/PtM-anJA.png'
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  }
})

module.exports = Product
