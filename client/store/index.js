import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user'
import productReducer from './products'
import singleProductReducer from './singleProduct'
import adminUserReducer from './usersForAdmin'
import adminSingleUserReducer from './singleUserForAdmin'
import reviewsReducer from './allReviews'
import reviewReducer from './singleReview'
import singleUserReducer from './singleUser'
import userReviewsReducer from './userReviews'
import userOrdersReducer from './userOrders'
import orderReducer from './orders'
import cartReducer from './cart'
import categoryReducer from './categories'
import orderManagementReducer from './orderManagement'
import singleOrderManagementReducer from './singleOrderMgmt'
import toastReducer from './toast'

const reducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
  singleProduct: singleProductReducer,
  usersForAdmin: adminUserReducer,
  singleUserForAdmin: adminSingleUserReducer,
  allReviews: reviewsReducer,
  singleReview: reviewReducer,
  singleUser: singleUserReducer,
  order: orderReducer,
  categories: categoryReducer,
  allOrdersForAdmin: orderManagementReducer,
  singleOrderForAdmin: singleOrderManagementReducer,
  toast: toastReducer,
  reviewsForUser: userReviewsReducer,
  ordersForUser: userOrdersReducer
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
export * from './singleUserForAdmin'
export * from './allReviews'
export * from './singleReview'
export * from './singleUser'
export * from './orders'
export * from './cart'
export * from './orderManagement'
export * from './singleOrderMgmt'
export * from './toast'
export * from './userReviews'
export * from './userOrders'
