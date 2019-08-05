import axios from 'axios'
const GET_SINGLE_USER = 'GET_SINGLE_USER'
const DELETE_REVIEW = 'DELETE_REVIEW'

const getSingleUser = singleUser => {
  return {
    type: GET_SINGLE_USER,
    singleUser
  }
}

const deleteReview = reviewId => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}

export function fetchSingleUser(id) {
  return async dispatch => {
    try {
      const userPath = `/api/users/${id}`
      const responses = await Promise.all([
        axios.get(userPath),
        axios.get(`${userPath}/reviews`)
      ])
      const [singleUser, reviews, orders] = responses.map(res => res.data)
      singleUser.reviews = reviews
      singleUser.orders = orders
      dispatch(getSingleUser(singleUser))
    } catch (err) {
      console.log(err)
    }
  }
}

export const removeReview = reviewId => {
  return async dispatch => {
    try {
      console.log('REMOVE_REVIEW')
      const {data: singleUser} = await axios.delete(`/api/users/${reviewId}`)
      dispatch(getSingleUser(singleUser))
    } catch (err) {
      console.log("There's an error with deleteReview!")
    }
  }
}

export const removeOrder = orderId => {
  return async dispatch => {
    const {data: singleUser} = await axios.delete(`/api/users/${orderId}`)
    dispatch(getSingleUser(singleUser))
  }
}

export const deleteReviews = reviewId => async dispatch => {
  try {
    console.log('DELETE_REVIEWS')
    await axios.delete(`/api/users/${reviewId}`)
    // console.log('SINGLEUSER', singleUser)
    // dispatch(getSingleUser(singleUser))
    // dispatch(removeReview(reviewId))
    dispatch(deleteReview(reviewId))
  } catch (err) {
    console.log("There's an error with the deleteReviews")
  }
}
// export const removeReview = (reviewId) => async dispatch => {
//   try {

//   }catch(err) {
//     console.log("There's an error with removeRevie")
//   }
// }
export default function singleUserReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.singleUser
    case DELETE_REVIEW:
      console.log('THE STATE', state)
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.reviewId)
      }
    default:
      return state
  }
}
