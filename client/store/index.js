import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import productsReducer, {removeProduct} from './products'

import singleProductReducer from './singleProduct'

const reducer = combineReducers({
  user,
  singleProductReducer,
  productsReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)
export default store
export * from './user'
export {removeProduct}
