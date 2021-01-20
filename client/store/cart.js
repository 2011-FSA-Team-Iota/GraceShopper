import axios from 'axios'
// import localStorage from 'local-storage'
import history from '../history'

// Action Types
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'
const SET_CART = 'SET_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

// Action creators
export const addProductToCart = (product, isLoggedIn) => {
  return {
    type: ADD_TO_CART,
    isLoggedIn,
    product
  }
}

export const removeProductFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    productId
  }
}
export const updateQuantity = product => {
  return {
    type: UPDATE_QUANTITY,
    product
  }
}
export const clearCart = () => ({type: CLEAR_CART})

export const setCart = (cart, isLoggedIn) => ({
  type: SET_CART,
  isLoggedIn,
  cart
})

// Thunk
export const addToCart = (isLoggedIn, product) => {
  return async dispatch => {
    try {
      if (isLoggedIn) {
        await axios.put(`/api/cart/`, product)
      }
      dispatch(addProductToCart(product, isLoggedIn))
      history.push('/cart')
    } catch (err) {
      console.error(err.message)
    }
  }
}

export const setQuantity = (product, quantity) => {
  return async dispatch => {
    try {
      await axios.put(`/api/cart/${product.id}`, quantity)
      product.orderProducts.quantity = quantity
      dispatch(updateQuantity(product))
    } catch (err) {
      console.error(err.message)
    }
  }
}
export const removeFromCart = product => {
  return async dispatch => {
    try {
      await axios.delete(`api/cart/${product.id}`)
      dispatch(removeProductFromCart(product.id))
    } catch (err) {
      console.error(err.message)
    }
  }
}

export const checkoutCart = () => {
  return async dispatch => {
    try {
      await axios.put(`/api/cart/checkout`)
      dispatch(clearCart())
      history.push('/checkout/confirmation')
    } catch (err) {
      console.error(err.message)
    }
  }
}

export const fetchCart = () => {
  return async dispatch => {
    try {
      const {data: cart} = await axios.get(`/api/cart/`)
      dispatch(setCart(cart.products))
    } catch (error) {
      console.error(error)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newState
      if (state.some(product => product.id === action.product.id)) {
        newState = state.map(product => {
          if (product.id === action.product.id) {
            product.orderProducts.quantity +=
              action.product.orderProducts.quantity
            return product
          }
          return product
        })
      } else newState = [...state, action.product]

      if (!action.isLoggedIn) {
        localStorage.setItem('cart', JSON.stringify(newState))
      }

      return newState
    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.productId)
    case CLEAR_CART:
      return []
    case SET_CART:
      if (action.isLoggedIn === false) {
        return JSON.parse(action.cart)
      }
      return action.cart
    case UPDATE_QUANTITY:
      return [
        ...state.filter(product => product.id !== action.product.id),
        action.product
      ]
    default:
      return state
  }
}
