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
    // let review
    try {
      const productPath = `/api/products/${id}`
      const responses = await Promise.all([
        axios.get(productPath),
        axios.get(`${productPath}/reviews`)
        // axios.post(`${productPath}/reviews`, review)
      ])
      const [singleProduct, reviews] = responses.map(res => res.data)
      singleProduct.reviews = reviews
      dispatch(getSingleProduct(singleProduct))
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
