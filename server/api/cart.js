const router = require('express').Router()
const {Order, Product, OrderProducts, User} = require('../db/models')

// Fetch cart on CartView render
router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const cart = await Order.findOne({
      where: {
        userId: userId,
        checkedOut: false
      },
      include: {
        model: Product
      }
    })
    !cart ? res.sendStatus(404) : res.json(cart)
  } catch (err) {
    next(err)
  }
})

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
        userId: req.user.id
      }
    })

    const listOfProducts = await pendingCart.getProducts()
    listOfProducts.map(product =>
      product.update({
        inventory: product.inventory - product.orderProducts.quantity
      })
    )

    await pendingCart.update({checkedOut: true})
    const user = await User.findByPk(req.user.id)
    await user.createOrder()

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

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
