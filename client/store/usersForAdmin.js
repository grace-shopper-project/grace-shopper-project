import axios from 'axios'

const GET_USERS = 'GET_USERS'
const DELETE_SINGLE_USER = 'DELETE_SINGLE_USER'
const SEARCH_USERS = 'SEARCH_USERS'

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

const searchUsers = users => {
  return {
    type: SEARCH_USERS,
    users
  }
}

export default function adminUserReducer(usersState = [], action) {
  switch (action.type) {
    case GET_USERS:
      return [...action.usersForAdmin]
    case DELETE_SINGLE_USER:
      return usersState.filter(user => user.id !== action.userId)
    case SEARCH_USERS:
      return [...action.users]
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

export const fetchSearchedUsers = userSearch => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/admin/users/search`, {
        params: {userSearch}
      })
      dispatch(searchUsers(data))
    } catch (err) {
      console.log(err)
    }
  }
}
