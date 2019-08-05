import axios from 'axios'

const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const ADD_REVIEW = 'ADD_REVIEW'

const getSingleProduct = singleProduct => {
  return {
    type: GET_SINGLE_PRODUCT,
    singleProduct
  }
}

export const newReview = review => ({
  type: ADD_REVIEW,
  review
})

export function fetchSingleProduct(id) {
  return async dispatch => {
    // let review
    try {
      const productPath = `/api/products/${id}`
      const responses = await Promise.all([
        axios.get(productPath),
        axios.get(`${productPath}/reviews`),
        axios.get(`${productPath}/orders`)
        // axios.post(`${productPath}/reviews`, review)
      ])
      const [singleProduct, reviews, orders] = responses.map(res => res.data)
      singleProduct.reviews = reviews
      singleProduct.orders = orders
      dispatch(getSingleProduct(singleProduct))
    } catch (error) {
      console.log(error)
    }
  }
}
export const submitReviews = (review, productId) => async dispatch => {
  try {
    const response = await axios.post(
      `/api/products/${productId}/reviews`,
      review
    )
    console.log(response)
    dispatch(newReview(response.data))
  } catch (err) {
    console.log("There's an error with submitReviews!")
  }
}

export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.singleProduct
    case ADD_REVIEW:
      return action.review
    default:
      return state
  }
}
