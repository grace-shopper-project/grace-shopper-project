import axios from 'axios'

const GET_ORDERS_FOR_ADMIN = 'GET_ORDERS_FOR_ADMIN'
const SEARCH_ORDERS_FOR_ADMIN = 'SEARCH_ORDERS_FOR_ADMIN'

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

export default function orderManagementReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDERS_FOR_ADMIN:
      return [...action.allOrdersForAdmin]
    case SEARCH_ORDERS_FOR_ADMIN:
      return [...action.searchedOrders]
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
