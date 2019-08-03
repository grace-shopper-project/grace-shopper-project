import axios from 'axios'

const GET_SINGLE_USER = 'GET_SPECIFIC_USER'
const UPDATE_SINGLE_USER = 'UPDATE_SINGLE_USER'
const UPDATE_SINGLE_USER_PW = 'UPDATE_SINGLE_USER_PW'

export const getSingleUser = singleUserForAdmin => {
  return {
    type: GET_SINGLE_USER,
    singleUserForAdmin
  }
}

export const updateSingleUser = updatedUser => {
  return {
    type: UPDATE_SINGLE_USER,
    updatedUser
  }
}

export const updateSingleUserPassword = updatedUserPw => {
  return {
    type: UPDATE_SINGLE_USER_PW,
    updatedUserPw
  }
}

export default function adminSingleUserReducer(singleUserState = [], action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.singleUserForAdmin
    case UPDATE_SINGLE_USER:
      return action.updatedUser
    case UPDATE_SINGLE_USER_PW:
      return action.updatedUserPw
    default:
      return singleUserState
  }
}

export const fetchSingleUserForAdmin = userId => {
  return async dispatch => {
    const {data} = await axios.get(`/api/admin/users/${userId}`)
    dispatch(getSingleUser(data))
  }
}

export const fetchUpdatedSingleUserForAdmin = userId => {
  return async dispatch => {
    const {data} = await axios.put(`/api/admin/users/${userId}/make-admin`)
    dispatch(updateSingleUser(data))
  }
}

export const fetchUpdatedSingleUserPassword = userId => {
  return async dispatch => {
    const {data} = await axios.put(`/api/admin/users/${userId}/reset-password`)
    console.log('call from inside the thunk creator: ', data)
    dispatch(updateSingleUserPassword(data))
  }
}
