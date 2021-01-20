import axios from 'axios'
import localStorage from 'local-storage'
import history from '../history'


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
      // Decide if User or not a User?
      if (!userId) {
        // localCart has something in it? IF YES
        if (JSON.parse(localStorage.get('localCart'))) {
          // bring in localCart and parse it back to an array of Obj's
          let currCart = JSON.parse(localStorage.get('localCart'))
          // iterate through the localCart array of objects
          if (
            currCart.some(
              //find if the item attempting to be added is already there
              curr => curr.product.id === productAndQuantity.product.id
            )
          ) {
            // if so add onto the quantity
            // eslint-disable-next-line no-undef
            curr.quantity += productAndQuantity.quantity
          } else {
            // if not push it onto the back of the cart AKA a new item
            currCart.push(productAndQuantity)
          }
          console.log(currCart)

          // turn the cart back into a string and send it back up to LocalStorage
          localStorage.set('localCart', JSON.stringify(currCart))
        } else {
          // if cart @ LS has nothing in it then make an array and add the first item
          localStorage.set('localCart', JSON.stringify([productAndQuantity]))
        }

        dispatch(addProductToCart(test.data))
      } else{

      await axios.put(`/api/cart/`, productAndQuantity)
      dispatch(addProductToCart(productAndQuantity.product))
      }
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
