const supertest = require('supertest-as-promised')(
  require('../../server/index')
)
const expect = require('chai').expect
const {User, Product, Order, OrderProducts} = require('../../server/db/models')
const db = require('../../server/db')
const app = require('../../server')
import sinon from 'sinon'
import mockAxios from '../mock-axios'

describe('Express API', () => {
  const products = [
    {id: 1, name: 'Build barn', price: 13},
    {id: 2, name: 'Discover love', price: 10},
    {id: 3, name: 'Open the pod bay doors', price: 12}
  ]
  beforeEach(() => {
    // mockAxios ensures that when our client-side code requests data from the
    // server, the request is always successful (even if we haven't implemented)
    // our server yet.
    mockAxios.onGet('/api/products').replyOnce(200, products)
  })
  // Let's test our Express routes WITHOUT actually using the database.
  // By replacing the findAll methods on the Project and Robot models
  // with a spy, we can ensure that our API tests won't fail just because
  // our Sequelize models haven't been implemented yet.
  const {findAll: productFindAll} = Product
  beforeEach(() => {
    Product.findAll = sinon.spy(() => Promise.resolve(products))
  })
  afterEach(() => {
    Product.findAll = productFindAll
  })

  // Consider writing your GET route in server/api/robots.js. And don't
  // forget to apply the express router to your API in server/api/index.js!
  xit('GET /api/products responds with all products', async () => {
    const response = await agent.get('/api/products').expect(200)
    expect(response.body).to.deep.equal(products)
    expect(Product.findAll.calledOnce).to.be.equal(true)
  })
})

// describe('products routes', function () {
//     beforeEach(async () => {
//         await db.sync({ force: true });
//         const products = await Promise.all([
//           Product.create({ name: 'iphone1', price: 10 }),
//           Product.create({ name: 'iphone2', price: 20 }),
//           Product.create({ name: 'iphone3', price: 30}),
//           Product.create({ name: 'iphone4', price: 40 }),
//           Product.create({ name: 'iphone5', price: 50 }),
//         ]);
//       });

//       describe('GET /api/products/', () => {
//         it('responds with all products', async () => {
//           const response = await app.get('/api/products');
//           expect(response.status).to.equal(200);
//           expect(response.body).to.be.an('array');
//           const names = response.body.map((product) => product.name);
//           expect(names).to.include('iphone1');
//           expect(names).to.include('iphone5');
//         });
//     });
// })
