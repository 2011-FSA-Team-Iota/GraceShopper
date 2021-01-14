import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'

function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    products
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

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
