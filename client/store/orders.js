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

export const deleteOrder = orderId => ({
  type: DELETE_ORDER,
  orderId
})

export const newOrder = (userId, order) => {
  return async dispatch => {
    try {
      const orderPath = `/api/users/${userId}`
      const responses = await Promise.all([
        axios.post(`${orderPath}/orders`, {
          order,
          subtotal: order.items.reduce(
            (acc, item) => item.quantity * item.price + acc,
            0
          )
        })
      ])
      const [users, orders] = responses.map(res => res.data)
      users.orders = users
      dispatch(addOrder(orders))
    } catch (err) {
      console.log("There's an error with newOrder")
    }
  }
}

export const removeOrder = orderId => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(`/api/orders/${orderId}`)
      dispatch(deleteOrder(data))
    } catch (err) {
      console.log("There's an error with deleteOrder")
    }
  }
}
export const orderReducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_ORDER:
      return action.orders
    case ADD_ORDER:
      return [...state, action.order]
    case DELETE_ORDER:
      return state.filter(order => order.id !== action.orderId)
    default:
      return state
  }
}

export default orderReducer
