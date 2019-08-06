import axios from 'axios'

const GET_REVIEWS = 'GET_REVIEWS'

export const getReviews = reviewsForUsers => {
  return {
    type: GET_REVIEWS,
    reviewsForUsers
  }
}

export const fetchReviewsForUsers = () => {
  return async dispatch => {
    const {data} = await axios.get(`/api/users/reviews`)
    dispatch(getReviews(data))
  }
}
export default function userReviewsReducer(state = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return [...action.reviewsForUsers]
    default:
      return state
  }
}
