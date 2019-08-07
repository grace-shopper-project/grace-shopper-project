import axios from 'axios'

const GET_REVIEWS = 'GET_REVIEWS'
const REMOVE_REVIEWS = 'REMOVE_REVIEWS'
export const getReviews = reviewsForUsers => {
  return {
    type: GET_REVIEWS,
    reviewsForUsers
  }
}

const deleteReview = reviewId => {
  return {
    type: REMOVE_REVIEWS,
    reviewId
  }
}
export const fetchReviewsForUsers = () => {
  return async dispatch => {
    const {data} = await axios.get(`/api/users/reviews`)
    dispatch(getReviews(data))
  }
}

export const deleteReviews = reviewId => async dispatch => {
  try {
    await axios.delete(`/api/users/${reviewId}`)
    dispatch(deleteReview(reviewId))
  } catch (err) {
    console.log("There's an error with the deleteReviews")
  }
}
export default function userReviewsReducer(state = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return [...action.reviewsForUsers]
    case REMOVE_REVIEWS:
      return state.filter(
        reviewsForUser => reviewsForUser.id !== action.reviewId
      )
    default:
      return state
  }
}
