import axios from 'axios'

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

export const setSingleProduct = product => ({
  type: SET_SINGLE_PRODUCT,
  product
})

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
    default:
      return state
  }
}
