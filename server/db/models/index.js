const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Cart = require('./cart')
const db = require('../db')

/*
  User (or anonymous) --> Makes orders (hasMany, belongsToOne)
  Orders is tied to products through a cart (manyToMany relationship)

 */

//User has many orders, but the order is tied to only one user
User.hasMany(Order)
Order.belongsTo(User)

//There can be many Products in an order, and a product can be in many orders
Order.belongsToMany(Product, {through: Cart})
Product.belongsToMany(Order, {through: Cart})

module.exports = {
  User,
  Product,
  Order,
  Cart,
  db
}
