const router = require('express').Router()
const {User, Order, Product, OrderProducts} = require('../db/models')

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
    const cart = await Order.findOne({
      where: {
        userId: req.params.userId,
        checkedOut: false
      }
    })

    // console.log('THIS IS THE CART --->', cart.__proto__)

    if (await cart.hasProduct(req.body.product.id)) {
      const productQuantity = await OrderProducts.findOne({
        where: {
          orderId: req.params.userId,
          productId: req.body.product.id
        }
      })

      productQuantity.update({
        quantity: productQuantity.quantity + req.body.quantity
      })

      console.log()
    }
  } catch (err) {
    next(err)
  }
})

// CHECKOUT
router.put('/checkout/:userId', async (req, res, next) => {
  try {
    const pendingCart = await Order.findOne({
      where: {
        checkedOut: false,
        userId: Number(req.params.userId)
      }
    })
    const response = await pendingCart.update(req.body)
    res.json(response)
  } catch (err) {
    next(err)
  }
})

module.exports = router
