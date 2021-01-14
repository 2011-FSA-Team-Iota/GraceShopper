import axios from 'axios'
// ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const DELETE_PRODUCTS = 'DELETE_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

// ACTION CREATORS
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
function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}
export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

// THUNK CREATORS
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

export const addProductThunk = product => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/products', product)
      dispatch(addProduct(data))
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
    case ADD_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
