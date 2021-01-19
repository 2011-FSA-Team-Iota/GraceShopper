import axios from 'axios'
import products from './products'

// Action Types
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'
const SET_CART = 'SET_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

// Action creators
export const addProductToCart = product => {
  return {
    type: ADD_TO_CART,
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

export const setCart = cart => ({type: SET_CART, cart})

// Thunk
export const addToCart = productAndQuantity => {
  return async dispatch => {
    try {

      await axios.put(`/api/cart/`, productAndQuantity)
      dispatch(addProductToCart(productAndQuantity.product))
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
      console.log('product---->', product)
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
      await axios.put(`api/cart/checkout`)
      dispatch(clearCart())
    } catch (err) {
      console.error(err.message)
    }
  }
}

export const fetchCart = userId => {
  return async dispatch => {
    try {
      const {data: cart} = await axios.get(`/api/cart/${userId}`)
      dispatch(setCart(cart.products))
    } catch (error) {
      console.error(error)
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product]
    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.productId)
    case CLEAR_CART:
      return []
    case SET_CART:
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
