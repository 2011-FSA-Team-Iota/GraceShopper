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






// Update Quantity
router.put('/:productId', async (req, res, next) => {
  try {
    const userId = req.user.id
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

// Add to Cart
router.put('/', async (req, res, next) => {
  try {
    const userId = req.user.id

    const cart = await Order.findOne({
      where: {
        userId: userId,
        checkedOut: false
      }
    })
    
    const boolean = await cart.hasProduct(req.body.product.id)

    if (boolean === true) {
      const productQuantity = await OrderProducts.findOne({
        where: {
          orderId: cart.id,
          productId: req.body.product.id
        }
      })

      productQuantity.update({
        quantity: productQuantity.quantity + req.body.quantity
      })

      res.sendStatus(204)
    } else if (boolean === false) {
      await cart.addProduct(req.body.product.id)

      const productQuantity = await OrderProducts.findOne({
        where: {
          orderId: cart.id,
          productId: req.body.product.id
        }
      })

      await productQuantity.update({
        quantity: req.body.quantity
      })

      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
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
