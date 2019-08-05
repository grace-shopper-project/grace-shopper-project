import axios from 'axios'

const RECIEVE_ORDER = 'RECIEVE_ORDER'
const ADD_ORDER = 'ADD_ORDER'
const DELETE_ORDER = 'DELETE_ORDER'

export const setOrder = orders => ({
  type: RECIEVE_ORDER,
  orders
})

export const addOrder = order => ({
  type: ADD_ORDER,
  order
})

export const fetchOrders = userId => {
  return async dispatch => {
    try {
      const orderPath = `/api/users/${userId}`
      const responses = await Promise.all([
        axios.get(orderPath),
        axios.get(`${orderPath}/orders`)
      ])
      const [users, orders] = responses.map(res => res.data)
      users.orders = users
      dispatch(setOrder(orders))
    } catch (err) {
      console.log("There's an error with fetchOrder")
    }
  }
}

export const newOrder = (userId, order) => {
  return async dispatch => {
    try {
      const orderPath = `/api/users/${userId}`
      const responses = await Promise.all([
        axios.post(`${orderPath}/orders`, order)
        axios.post(`/api/`) 
      ])
      const [users, orders] = responses.map(res => res.data)
      users.orders = users
      dispatch(addOrder(orders))
    }catch(err) {
      console.log("There's an error with newOrder")
    }
  }
}

export const orderReducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_ORDER:
      return action.orders
    default:
      return state
  }
}

export default orderReducer
