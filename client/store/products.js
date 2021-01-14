import axios from 'axios'
// ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

// ACTION CREATORS
function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    products
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

// SUB-REDUCER
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    case ADD_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
