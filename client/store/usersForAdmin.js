import axios from 'axios'

const GET_USERS = 'GET_USERS'
const GET_SINGLE_USER = 'GET_SPECIFIC_USER'

export const getUsers = usersForAdmin => {
  return {
    type: GET_USERS,
    usersForAdmin
  }
}

export const getSingleUser = singleUserForAdmin => {
  return {
    type: GET_SINGLE_USER,
    singleUserForAdmin
  }
}

export default function adminUserReducer(usersState = [], action) {
  switch (action.type) {
    case GET_USERS:
      return [...action.usersForAdmin]
    case GET_SINGLE_USER:
      return action.singleUserForAdmin
    default:
      return usersState
  }
}

export const fetchUsersForAdmin = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/admin/users')
    dispatch(getUsers(data))
  }
}

export const fetchSingleUserForAdmin = userId => {
  return async dispatch => {
    const {data} = await axios.get(`/api/admin/users/${userId}`)
    dispatch(getSingleUser(data))
  }
}
