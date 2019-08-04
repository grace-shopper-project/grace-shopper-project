const axios = require('axios')

const ADD_REVIEWS = 'ADD_REVIEWS'
const SET_REVIEW = 'SET_REVIEW'

export const addReview = review => ({
  type: ADD_REVIEWS,
  review
})

export const setSingleReview = review => ({
  type: SET_REVIEW,
  review
})

export const fetchReview = reviewId => async dispatch => {
  const {data: review} = await axios.get(`/api/reviews/${reviewId}`)
  dispatch(setSingleReview(review))
}

const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_REVIEW:
      return action.review
    case ADD_REVIEWS:
      return {...state, review: action.review}
    default:
      return state
  }
}

export default reviewReducer
