import axios from 'axios'
import history from '../history'
import {setCart, clearCart} from './cart'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {
  email: null,
  isAdmin: false,
  isGuest: true
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const {data} = await axios.get('/auth/me')
    dispatch(getUser(data || defaultUser))
    if (data === '' && !!localStorage.getItem('cart') === true) {
      dispatch(setCart(localStorage.getItem('cart'), false))
    }
    if (data.orders !== undefined) {
      data.isGuest = false
      dispatch(setCart(data.orders[0].products, true))
    }
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    if (method === 'login') {
      const currentCart = res.data.orders.find(
        order => order.checkedOut === false
      )
      dispatch(setCart(currentCart.products))
    }
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    dispatch(clearCart())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
