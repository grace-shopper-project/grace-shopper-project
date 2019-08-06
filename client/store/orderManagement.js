import axios from 'axios'

const GET_ORDERS_FOR_ADMIN = 'GET_ORDERS_FOR_ADMIN'
const SEARCH_ORDERS_FOR_ADMIN = 'SEARCH_ORDERS_FOR_ADMIN'
const DELETE_ORDER = 'DELETE_ORDER'

const getOrders = allOrdersForAdmin => {
  return {
    type: GET_ORDERS_FOR_ADMIN,
    allOrdersForAdmin
  }
}

const searchOrdersForAdmin = searchedOrders => {
  return {
    type: SEARCH_ORDERS_FOR_ADMIN,
    searchedOrders
  }
}

const deleteOrder = orderId => {
  return {
    type: DELETE_ORDER,
    orderId
  }
}

export default function orderManagementReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDERS_FOR_ADMIN:
      return [...action.allOrdersForAdmin]
    case SEARCH_ORDERS_FOR_ADMIN:
      return [...action.searchedOrders]
    case DELETE_ORDER:
      return state.filter(order => order.id !== action.orderId)
    default:
      return state
  }
}

export const fetchAllOrders = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/admin/orders')
    dispatch(getOrders(data))
  }
}

export const fetchSearchedOrders = status => {
  return async dispatch => {
    const {data} = await axios.get('/api/admin/orders/search', {
      params: {status}
    })
    dispatch(searchOrdersForAdmin(data))
  }
}

export const fetchDeleteOrder = orderId => {
  return async dispatch => {
    await axios.delete(`/api/admin/orders/${orderId}`)
    dispatch(deleteOrder(orderId))
  }
}
