'use strict'

const db = require('../server/db')
const {User, Product, Order} = require('../server/db/models')
const dummyProducts = require('../seed-data.js')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', username: 'tester', password: '123'})
  ])

  await Promise.all(dummyProducts.map(product => Product.create(product)))

  const allProducts = await Product.findAll()
  const singleUser = await User.findOne({where: {username: 'tester'}})

  await Promise.all(allProducts.map(product => Order.create(product)))

  const allOrders = await Order.findAll()

  // console.log(allOrders[0].__proto__)
  await allOrders[0].addProduct(allProducts[1])
  await allOrders[1].addProduct(allProducts[1])
  await allOrders[6].addProduct(allProducts[1])
  await allOrders[0].addProduct(allProducts[3])
  await allOrders[0].addProduct(allProducts[5])
  await allOrders[0].addProduct(allProducts[6])

  await singleUser.addOrder(allOrders[0])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
