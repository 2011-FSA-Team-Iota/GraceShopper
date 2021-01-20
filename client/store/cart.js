import axios from 'axios'
import localStorage from 'local-storage'

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
export const addToCart = (userId, productAndQuantity) => {
  return async dispatch => {
    try {
      const test = await axios.put(`api/cart/${userId}`, productAndQuantity)
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
      }
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
      return state.filter(product => product.id !== productId)
    case CLEAR_CART:
      return []
    case SET_CART:
      return action.cart
    default:
      return state
  }
}
