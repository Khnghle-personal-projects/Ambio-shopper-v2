const router = require('express').Router()
const {Cart, Order, Product} = require('../db/models')
module.exports = router

//Security Middleware
const userOnly = (req, res, next) => {
  if (!req.user || req.user.id !== Number(req.params.userId)) {
    const err = new Error('Unauthorized User')
    err.status = 401
    return next(err)
  }
  next()
}

//Grab a current cart for the user (or create a new one)
//Products can be found within products key
router.get('/:userId', async (req, res, next) => {
  try {
    const [cart, created] = await Order.findOrCreate({
      where: {
        userId: Number(req.params.userId),
        status: 'created'
      },
      attributes: ['id', 'status'],
      include: [
        {
          model: Product,
          required: false,
          attributes: ['name', 'price', 'pic', 'id']
        }
      ]
    })

    if (created) console.log(`Cart #${cart.id} was created`)
    res.send(cart)
  } catch (err) {
    next(err)
  }
})

//Grabs an item from the cart
router.get('/:userId/:orderId/:productId', async (req, res, next) => {
  try {
    const item = await Cart.findOne({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    res.send(item)
  } catch (error) {
    next(error)
  }
})

//Deletes an item from the cart
router.delete('/:userId/:orderId/:productId', async (req, res, next) => {
  try {
    await Cart.destroy({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

//Adds an item to the cart
router.post('/:userId/:orderId/:productId', async (req, res, next) => {
  try {
    const [item] = await Cart.findOrCreate({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })

    item.qty = Number(req.body.qty)
    await item.save()

    res.send(item)
  } catch (error) {
    next(error)
  }
})
