const router = require('express').Router()
const {User, Order, Product} = require('../db/models')

router.get('/:userid', async (req, res, next) => {
  try {
    const id = Number(req.params.userid)
    const cart = await Order.findOne({
      where: {
        userId: id,
        checkedOut: false
      },
      include: {
        model: Product
      }
    })

    !cart ? res.sendStatus(404) : res.json(cart)
  } catch (error) {
    next(error)
  }
})

// CHECKOUT
router.put('/:userid', async (req, res, next) => {
  try {
    const pendingCart = await Order.findOne({
      where: {
        checkedOut: false,
        userId: Number(req.params.userid)
      }
    })
    const response = await pendingCart.update(req.body)
    res.json(response)
  } catch (error) {
    next(error)
  }
})

module.exports = router
