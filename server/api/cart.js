const router = require('express').Router()
const {Cart, Order, Product} = require('../db/models')
module.exports = router

//Grab a current cart for the user (or create a new one)
//Products can be found within products key
router.get('/:userId', async (req, res, next) => {
  try {
    const [cart, created] = await Order.findOrCreate({
      where: {
        userId: Number(req.params.userId),
        status: 'created'
      },
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
