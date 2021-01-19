/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchProducts} from './products'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {action: 'GET_PRODUCTS', products: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('Fetchs All Products', () => {
    it('eventually dispatches the GET PRODUCTS action', async () => {
      const fakeProducts = {name: 'iphone 888', price: 100000}
      mockAxios.onGet('/products').replyOnce(200, fakeProducts)
      await store.dispatch(fetchProducts())
      const actions = await store.getActions()
      //ISSUE: getActions() return empty array
      expect(actions[0].type).to.be.equal('GET_PRODUCTS')
      expect(actions[0].products).to.be.deep.equal(fakeProducts)
    })
  })
})
