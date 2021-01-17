const {expect} = require('chai')
const db = require('../../server/db/index')
const {
  // User,
  Product
  // Order,
  // OrderProducts
} = require('../../server/db/models/index')

const _app = require('../../server/index')
const app = require('supertest')(_app)

describe('Tier 1: GET Routes', () => {
  describe('Express', () => {
    beforeEach(async () => {
      await db.sync({force: true})
      await Promise.all([
        Product.create({
          name: 'iphone mocha',
          price: 29900,
          description: 'Blah Blah',
          imgUrl:
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
        }),
        Product.create({
          name: 'iphone chai',
          price: 30999,
          description: 'Blah Blah',
          imgUrl:
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
        })
      ])
    })

    describe('GET /api/products', () => {
      it('responds with all products', async () => {
        const response = await app.get('/api/products')
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an('array')
        const productArr = response.body.map(eachProduct => eachProduct.name)
        expect(productArr).to.include('iphone mocha')
        expect(productArr).to.include('iphone chai')
      })

      // it('does not include any teachers in the response', async () => {
      //   const response = await app.get('/api/users/unassigned');
      //   const names = response.body.map((user) => user.name);
      //   expect(names).to.not.include(
      //     'LUCY',
      //     'LUCY is a teacher, but was included in the response'
      //   );
      //   expect(names).to.not.include(
      //     'HANNAH',
      //     'HANNAH is a teacher, but was included in the response'
      //   );
      // });

      // it('does not include any students who have a mentor', async () => {
      //   const response = await app.get('/api/users/unassigned');
      //   const names = response.body.map((user) => user.name);
      //   expect(names).to.not.include(
      //     'MOE',
      //     'Students with a mentor should not be included'
      //   );
      //   expect(response.body.length).to.equal(2);
      // });
    })
  })
})
