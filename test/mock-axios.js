// import MockAdapter from 'axios-mock-adapter'
// import axios from 'axios'
// const mock = new MockAdapter(axios)
// const app = require('../server')
// const agent = require('supertest')(app)

// export const anHourFromNow = new Date(Date.now() + 60 * (60 * 1000)).toString()
// const mockProducts = [
//   {
//     id: 1,
//     name: 'iphone x',
//     price: 299.99,
//     description: 'Test Blah Blah',
//     imgUrl:
//       'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
//   },
//   {
//     id: 2,
//     name: 'iphone xXXXXx',
//     price: 1299.99,
//     description: 'Test Blah Blah',
//     imgUrl:
//       'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
//   }
// ]

// // const mockRobots = [
// //   { id: 1, name: 'R2-D2', imageUrl: '/images/r2d2.png' },
// //   { id: 2, name: 'WALL-E', imageUrl: '/images/walle.jpeg' },
// // ]

// beforeEach(() => {
//   // // Mock GET /api/robots => all robots
//   // mock.onGet('/api/robots').reply(200, mockRobots)

//   // Mock GET /api/products => all products
//   mock.onGet('/api/products').reply(200, mockProducts)

//   // // Mock GET /api/robots/:id => single robot with matching id
//   // mock.onGet(/\/api\/robots\/\d+/).reply(config => {
//   //   const urlArr = config.url.split('/')
//   //   const id = Number(urlArr.slice(-1)[0])
//   //   const robot = mockRobots.find(rob => rob.id === id)
//   //   return robot ? [200, robot] : [404]
//   // })

//   // Mock GET /api/products/:id => single product with matching id
//   mock.onGet(/\/api\/products\/\d+/).reply(config => {
//     const urlArr = config.url.split('/')
//     const id = Number(urlArr.slice(-1)[0])
//     const product = mockProducts.find(prod => prod.id === id)
//     return product ? [200, product] : [404]
//   })

//   // If something in the tests doesn't match one of the above routes,
//   // use a supertest agent to use the actual API
//   mock.onAny().reply(async req => {
//     const response = await agent[req.method](req.url, req.data)
//     return [response.status, response.body]
//   })
// })

// afterEach(() => mock.reset())

// export default mock
