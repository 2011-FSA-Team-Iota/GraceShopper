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

// ADD TO CART
router.put('/:userId', async (req, res, next) => {
  try {
    console.log('TESTERRRRRRR')
    console.log(req.params.userId)
  } catch (err) {
    next(err)
  }
})

// CHECKOUT
router.put('/checkout', async (req, res, next) => {
  try {
    const pendingCart = await Order.findOne({
      where: {
        checkedOut: false,
        userId: Number(req.user.id)
      }
    })
    await pendingCart.update({checkedOut: true})
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

module.exports = router
