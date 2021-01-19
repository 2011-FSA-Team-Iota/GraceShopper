const router = require('express').Router()
const {Order, Product, OrderProducts} = require('../db/models')

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
// router.put('/userId', async (req, res, next) => {
//   try {
//     console.log('user--->',req.user)
//     console.log('TESTERRRRRRR')
//     // console.log(req.params.userId)
//   } catch (err) {
//     next(err)
//   }
// })
// Update Quantity
router.put('/:productId', async (req, res, next) => {
  try {
    const userId = req.user.id
    const cart = await Order.findOne({
      where: {
        userId: userId,
        checkedOut: false
      }
    })
    console.log(cart)
    const productQuantity = await OrderProducts.findOne({
      where: {
        orderId: cart.id,
        productId: Number(req.params.productId)
      }
    })
    productQuantity.update({
      quantity: req.body.quantity
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
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
// Delete From Cart
router.delete('/:productId', async (req, res, next) => {
  try {
    const userId = req.user.id
    const cart = await Order.findOne({
      where: {
        userId: userId,
        checkedOut: false
      }
    })
    await cart.removeProduct(Number(req.params.productId))

    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
module.exports = router
