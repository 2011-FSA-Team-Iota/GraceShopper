import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import productsReducer, {removeProduct} from './products'
import singleProductReducer, {editProduct} from './singleProduct'
import cartReducer, {
  addProductToCart,
  removeProductFromCart,
  clearCart,
  addToCart,
  removeFromCart,
  checkoutCart,
  setCart
} from './cart'

const reducer = combineReducers({
  user,
  singleProductReducer,
  productsReducer,
  cart: cartReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
export * from './user'
export {
  removeProduct,
  editProduct,
  addProductToCart,
  removeProductFromCart,
  clearCart,
  addToCart,
  removeFromCart,
  checkoutCart,
  setCart
}
