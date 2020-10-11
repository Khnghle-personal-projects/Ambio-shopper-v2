const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const cartItem = require('./cart')
const db = require('../db')
const Cart = require('./cart')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

/*
  User (or anonymous) --> Makes orders (hasMany, belongsToOne)
  Orders is tied to products through a cart (manyToMany relationship)

 */

//User has many orders, but the order is tied to only one user
User.hasMany(Order)
Order.belongsTo(User)

//There can be many Products in an order, and a product can be in many orders
// Order.belongsToMany(Product, {through: Cart})
// Product.belongsToMany(Order, {through: Cart})

module.exports = {
  User,
  Product,
  Order,
  Cart,
  db
}
