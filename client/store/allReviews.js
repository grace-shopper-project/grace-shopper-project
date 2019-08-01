const axios = require('axios')

const SET_REVIEW = 'SET_REVIEW'
const DELETE_REVIEW = 'DELETE_REVIEW'

export const setReviews = reviews => ({
  type: SET_REVIEW,
  reviews
})

export const deleteReview = reviewId => ({
  type: DELETE_REVIEW,
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

export const removeReview = reviewId => dispatch => {
  try {
    dispatch(findReview(reviewId))
    dispatch(deleteReview(reviewId))
  } catch (err) {
    console.log("There's an error with the deleteReviews")
  }
}

export const fetchReviews = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/reviews')
    dispatch(setReviews(data))
  } catch (err) {
    console.log("There's an error with fetchReviews")
  }
}

// export const writeReview = review =>  {
//   try {
//    const response = await axios.post("api/reviews", review);
//    dispatch(addReviews(response.data));
//   }catch(err){
//     console.log("There's an error with submitReview")
//   }
// }

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_REVIEW:
      return action.reviews
    case DELETE_REVIEW:
      return state.filter(review => review.id !== action.reviewId)
    default:
      return state
  }
}

export default reviewsReducer
