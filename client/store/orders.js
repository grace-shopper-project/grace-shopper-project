import axios from 'axios'

const RECIEVE_ORDER = 'RECIEVE_ORDER'

export const setOrder = order => ({
  type: RECIEVE_ORDER,
  order
})
const orderReducer = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_ORDER:
      return action.order
    default:
      return state
  }
}

export default orderReducer
