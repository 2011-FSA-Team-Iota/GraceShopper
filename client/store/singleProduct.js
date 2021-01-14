import axios from 'axios'

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

export const setSingleProduct = product => ({
  type: SET_SINGLE_PRODUCT,
  product
})

export function editProduct(productId, product) {
  return async dispatch => {
    try {
      const {data: updated} = await axios.put(
        `/api/products/${productId}`,
        product
      )
      dispatch(updateProduct(updated))
    } catch (error) {
      console.error(error)
    }
  }
}
export const fetchSingleProduct = id => {
  return async dispatch => {
    try {
      const {data: product} = await axios.get(`/api/products/${id}`)
      dispatch(setSingleProduct(product))
    } catch (error) {
      console.log(`Error fetching single product: ${error}`)
    }
  }
}

const initialState = {}

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product
    case UPDATE_PRODUCT:
      return action.product
    default:
      return state
  }
}
