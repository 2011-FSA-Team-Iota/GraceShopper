import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const DELETE_PRODUCTS = 'DELETE_PRODUCTS'

function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    products
  }
}

function deleteProduct(productId) {
  return {
    type: DELETE_PRODUCTS,
    productId
  }
}

export function fetchProducts() {
  return async dispatch => {
    try {
      const response = await axios.get('/api/products')
      dispatch(getProducts(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

export function removeProduct(productId, history) {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${productId}`)
      dispatch(deleteProduct(productId))
      history.push('/products')
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    case DELETE_PRODUCTS:
      return state.filter(product => product.id !== action.productId)
    default:
      return state
  }
}
