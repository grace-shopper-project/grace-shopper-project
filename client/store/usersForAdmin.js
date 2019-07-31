import axios from 'axios'

const GET_USERS = 'GET_USERS'

export const getUsers = users => {
  return {
    type: GET_USERS,
    users
  }
}

export default function(usersState = [], action) {
  switch (action.type) {
    case GET_USERS:
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
