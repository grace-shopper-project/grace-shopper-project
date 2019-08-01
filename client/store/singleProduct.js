import axios from 'axios'

const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

const getSingleProduct = singleProduct => {
  return {
    type: GET_SINGLE_PRODUCT,
    singleProduct
  }
}

export function fetchSingleProduct(id) {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(getSingleProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.singleProduct
    default:
      return state
  }
}
