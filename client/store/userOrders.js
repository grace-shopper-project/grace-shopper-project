import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'

export const getOrders = ordersForUsers => {
  return {
    type: GET_ORDERS,
    ordersForUsers
  }
}

export const fetchOrdersForUsers = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/users/orders')
    dispatch(getOrders(data))
  }
}
export default function userOrdersReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return [...action.ordersForUsers]
    default:
      return state
  }
}
