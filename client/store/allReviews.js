const axios = require('axios')

const SET_REVIEWS = 'SET_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'
const REMOVE_REVIEW = 'REMOVE_REVIEW'
// const DELETE_REVIEW = 'DELETE_REVIEW'

export const setReviews = allReviews => ({
  type: SET_REVIEWS,
  allReviews
})

export const newReview = review => ({
  type: ADD_REVIEW,
  review
})

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const findReview = reviewId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/reviews/${reviewId}`)
    dispatch(setReviews(data))
  } catch (err) {
    console.log("There's an error with fetchReview")
  }
}

export const deleteReview = reviewId => {
  return async dispatch => {
    try {
      const {data: review} = await axios.delete(`/api/reviews/${reviewId}`)
      dispatch(setReviews(review))
    } catch (err) {
      console.log("There's an error with deleteReview!")
    }
  }
}

export const deleteReviews = reviewId => dispatch => {
  try {
    dispatch(deleteReview(reviewId))
    dispatch(removeReview(reviewId))
  } catch (err) {
    console.log("There's an error with the deleteReviews")
  }
}

export const fetchReviews = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/reviews')
      console.log('THIS BE THE DATA', data)
      dispatch(setReviews(data))
    } catch (err) {
      console.log("There's an error with fetchReviews")
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

export const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_REVIEWS:
      return action.allReviews
    case ADD_REVIEW:
      return [...state, action.review]
    case REMOVE_REVIEW:
      return state.filter(review => review.id !== action.reviewId)
    default:
      return state
  }
}

export default reviewsReducer
