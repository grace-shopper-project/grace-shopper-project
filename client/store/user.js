import axios from 'axios'
import history from '../history'
import {Next} from 'react-bootstrap/PageItem'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_REVIEWS = 'SET_REVIEWS'
const GET_ORDERS = 'GET_ORDERS'
/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const getOrders = userId => ({type: GET_ORDERS, userId})
/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
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
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const fetchOrders = userId => {
  return async dispatch => {
    try {
      const orderPath = `/api/users/${userId}`
      const responses = await Promise.all([axios.get(`${orderPath}/orders`)])
      const [users, orders] = responses.map(res => res.data)
      users.orders = orders
      dispatch(getOrders(users))
    } catch (err) {
      console.log("There's an error with fetchOrder")
    }
  }
}
/**
 * REDUCER
 */
export default function userReducer(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case GET_ORDERS:
      return action.userId
    default:
      return state
  }
}
