import axios from 'axios'

const GET_USERS = 'GET_USERS'
const DELETE_SINGLE_USER = 'DELETE_SINGLE_USER'

const getUsers = usersForAdmin => {
  return {
    type: GET_USERS,
    usersForAdmin
  }
}

const deleteSingleUser = userId => {
  return {
    type: DELETE_SINGLE_USER,
    userId
  }
}

export default function adminUserReducer(usersState = [], action) {
  switch (action.type) {
    case GET_USERS:
      return [...action.usersForAdmin]
    case DELETE_SINGLE_USER:
      return usersState.filter(user => user.id !== action.userId)
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

export const fetchDeleteSingleUserForAdmin = userId => {
  return async dispatch => {
    await axios.delete(`/api/admin/users/${userId}`)
    dispatch(deleteSingleUser(userId))
  }
}
