const axios = require('axios')

const SET_REVIEWS = 'SET_REVIEWS';
const DELETE_REVIEWS = 'DELETE_REVIEWS';

export const setReviews = reviews => ({
  type: SET_REVIEWS,
  reviews
})

export const deleteReviews = reviewId => ({
  type: DELETE_REVIEWS,
  reviewId
})


export const fetchReview =  reviewId => async dispatch =>{
  try{ 
  const {data} = await axios.get(`/api/reviews/${reviewId}`)
   dispatch(setReviews(data))
  }catch(err) {
    console.log("There's an error with fetchReview")
  }
 }

 export const deleteReviews= reviewId => async dispatch => {
  try {
    dispatch(fetchReview(reviewId));
    dispatch(deleteReviews(reviewId));
  }catch(err){
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
    case SET_REVIEWS:
      return action.reviews
    case DELETE_REVIEWS:
        return state.filter(review => review.id !== action.reviewId)
    default:
      return state
  }
}

export default reviewsReducer
