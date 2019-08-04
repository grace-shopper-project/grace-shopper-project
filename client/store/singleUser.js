import axios from 'axios'
const GET_SINGLE_USER = 'GET_SINGLE_USER'

const getSingleUser = singleUser => {
  return {
    type: GET_SINGLE_USER,
    singleUser
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
      const [singleUser, reviews] = responses.map(res => res.data)
      singleUser.reviews = reviews
      dispatch(getSingleUser(singleUser))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function singleUserReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.singleUser
    default:
      return state
  }
}
