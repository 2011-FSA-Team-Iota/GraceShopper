const router = require('express').Router()
const {Product} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()

    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)

    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    let product = await Product.findByPk(req.params.id)

    if (!product) res.sendStatus(404)
    else {
      product = await product.update(req.body)
      res.json(product)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)

    if (!product) res.sendStatus(404)
    else {
      await product.destroy()
      res.sendStatus(204)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const createProduct = await Product.create(req.body)

    res.json(createProduct)
  } catch (err) {
    next(err)
  }
})

module.exports = router
