const router = require('express').Router()
const {User, Order} = require('../db/models')

// router.get('/', async (req, res, next) => {})

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
