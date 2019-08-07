import axios from 'axios'

const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER'

const getSingleOrder = singleOrder => {
  return {
    type: GET_SINGLE_ORDER,
    singleOrder
  }
}

export default function singleOrderManagementReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_ORDER:
      return action.singleOrder
    default:
      return state
  }
}

export const fetchSingleOrder = orderId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/admin/orders/${orderId}`)
      console.log(
        'call from inside the thunk for singleUser; here is data: ',
        data
      )
      dispatch(getSingleOrder(data))
    } catch (err) {
      console.log(err)
    }
  }
}
