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

describe('Tier 1: ', () => {
  describe('Express Routes', () => {
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
        }),
        Product.create({
          name: 'iphone jasmine',
          price: 30999,
          description: 'Blah Blah',
          imgUrl:
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
        }),
        Product.create({
          name: 'iphone 100',
          price: 30999,
          description: 'Blah Blah',
          imgUrl:
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
        })
      ])
    })

    describe('GET - /api/products', () => {
      it('responds with all products', async () => {
        const response = await app.get('/api/products')
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an('array')
        const productArr = response.body.map(eachProduct => eachProduct.name)
        expect(productArr).to.include('iphone mocha')
        expect(productArr).to.include('iphone chai')
      })
    })

    describe('DELETE - /api/products/:id', () => {
      it('deletes an existing product by their id and responds with 204', async () => {
        let product = {id: 4, name: 'iphone 100'}
        const response = await app.delete(`/api/products/${product.id}`)
        expect(response.status).to.equal(204)
        let iphone100 = await Product.findByPk(product.id)
        expect(
          iphone100,
          'iPhone 100 should have been deleted, but was not'
        ).to.equal(null)
        expect(await Product.findAll()).to.have.lengthOf(3)
      })
    })
  })
})
