import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user'
import productReducer from './products'
import singleProductReducer from './singleProduct'
import adminUserReducer from './usersForAdmin'
import reviewsReducer from './allReviews'
import reviewReducer from './singleReviews'
const reducer = combineReducers({
  user: userReducer,
  products: productReducer,
  singleProduct: singleProductReducer,
  usersForAdmin: adminUserReducer,
  allReviews: reviewsReducer,
  singleReview: reviewReducer
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
