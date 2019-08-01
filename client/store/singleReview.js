const axios = require('axios')

const ADD_REVIEWS = 'ADD_REVIEWS'

export const addReview = review => ({
  type: ADD_REVIEWS,
  review
})

// TODO: Remember that a thunk creator is a function that returns a function
// and you can't use await outside of an async function
export const submitReview = review => async dispatch => {
  try {
    const response = await axios.post('api/reviews', review)
    dispatch(addReview(response.data))
  } catch (err) {
    console.log("There's an error with submitReview")
  }
}
const singleReviewReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_REVIEWS:
      return [...state, action.review]
    default:
      return state
  }
}

export default singleReviewReducer
