import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user'
import productReducer from './products'
import singleProductReducer from './singleProduct'
import adminUserReducer from './usersForAdmin'
import reviewsReducer from './allReviews'
import reviewReducer from './singleReview'
import singleUserReducer from './singleUser'
import orderReducer from './orders'
import cartReducer from './cart'
import categoryReducer from './categories'

const reducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
  singleProduct: singleProductReducer,
  usersForAdmin: adminUserReducer,
  allReviews: reviewsReducer,
  singleReview: reviewReducer,
  singleUser: singleUserReducer,
  order: orderReducer,
  categories: categoryReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './singleProduct'
export * from './usersForAdmin'
export * from './allReviews'
export * from './singleReview'
export * from './singleUser'
export * from './orders'
export * from './cart'
