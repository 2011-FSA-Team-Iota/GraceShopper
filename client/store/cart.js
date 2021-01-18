import axios from 'axios'

// Action Types
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'
const SET_CART = 'SET_CART'

// Action creators
export const addProductToCart = product => {
  return {
    type: ADD_TO_CART,
    product
  }
}

export const removeProductFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    product
  }
}

export const clearCart = () => ({type: CLEAR_CART})

export const setCart = cart => ({type: SET_CART, cart})

// Thunk
export const addToCart = product => {
  return async dispatch => {
    try {
      await axios.put(`api/cart`, product)
      dispatch(addProductToCart(product))
    } catch (err) {
      console.error(err.message)
    }
  }
}

// export const removeFromCart = productId => {
//   return async dispatch => {
//     try {

//     } catch (err) {
//       console.error(err.message)
//     }
//   }
// }

export const checkoutCart = userId => {
  return async dispatch => {
    try {
      await axios.put(`api/cart/${userId}`, {checkedOut: true})
      dispatch(clearCart())
    } catch (err) {
      console.error(err.message)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product]
    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== productId)
    case CLEAR_CART:
      return []
    case SET_CART:
      return action.cart
    default:
      return state
  }
}
