const router = require('express').Router()
const {User} = require('../db/models')
const Product = require('../db/models/product')
module.exports = router
const adminsOnly = require('../utils/adminsOnly')
const HttpError = require('../utils/HttpError')

router.param('id', (req, res, next, id) => {
  User.findByPk(id)
    .then(user => {
      if (!user) throw HttpError(404)
      req.requestedUser = user
      next()
      return null
    })
    .catch(next)
})

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})


// router.get('/:userId', async (req, res, next) => {
//   try {
//     const userId = Number(req.params.userId)
//     const user = await User.findByPk(userId)

//     !user ? res.sendStatus(404) : res.send(user)
//   } catch (err) {
//     next(err)
//   }
// })

// Prevented hackers from creating req.body.isAdmin by not passing iadAdmin into req.body
// if You don't want anyone to add "isAdmin" previliage, just don't add

router.post('/', (req, res, next) => {
  const {email, password, googleId} = req.body
  // delete req.body.isAdmin ----> this is another way however, better to allow list things than disallow list. Just leverage defaultvalue set from db.

  User.create({
    email,
    password,
    googleId
  })
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  req.requestedUser
    .reload({
      // include: [{
      //   model: Product,
      // }]
    })
    .then(requestedUser => {
      res.json(requestedUser)
    })
    .catch(next)
})

router.put('/:id', adminsOnly, (req, res, next) => {
  req.requestedUser
    .update(req.body)
    .then(user => {
      res.json(user)
    })
    .catch(next)
})

router.delete('/:id', adminsOnly, (req, res, next) => {
  req.requestedUser
    .destroy()
    .then(() => {
      res.status(204).end()
    })
    .catch(next)
})

module.exports = router

//How to check if adminsOnly works in 'router.delete'

// const deleteUser = async (id) => {
//   const res = await fetch(`/api/users/${id}`, {
//     method: 'DELETE'
//   })
//   if (res.status ===204) {
//     console.log(`Successfuly deleted user ${id}`)
//   } else {
//     console.log(`Unauthorized!`)
//   }
// }
