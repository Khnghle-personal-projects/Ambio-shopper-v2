'use strict'

const db = require('../server/db')
const {User, Product, Cart} = require('../server/db/models')
const amibos = require('./seed.products')
const orders = require('./seed.orders')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  //Add users
  const [user1, user2] = await Promise.all([
    User.create({email: 'test@email.com', password: '123'}),
    User.create({email: 'test2@email.com', password: '123'})
  ])

  //Add product
  const [product1, product2, product3] = await Promise.all(
    amibos.map(curr => {
      return Product.create(curr)
    })
  )

  //Add orders
  const [order1, order2] = await Promise.all(
    orders.map(curr => {
      if (curr.userId === 1) return user1.createOrder(curr)
      else return user2.createOrder(curr)
    })
  )

  //Adding a product to an order
  await order1.addProduct(product1)
  await order1.addProduct(product2)

  await order2.addProduct(product1)
  await order2.addProduct(product2)
  await order2.addProduct(product3)

  await Cart.create({qty: 5, productId: 1, orderId: 3})

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
