import axios from 'axios'

const GET_SINGLE_USER = 'GET_SPECIFIC_USER'
const UPDATE_SINGLE_USER = 'UPDATE_SINGLE_USER'
const REMOVE_ADMIN_RIGHTS = 'REMOVE_ADMIN_RIGHTS'
const UPDATE_SINGLE_USER_PW = 'UPDATE_SINGLE_USER_PW'

const getSingleUser = singleUserForAdmin => {
  return {
    type: GET_SINGLE_USER,
    singleUserForAdmin
  }
}

const updateSingleUser = updatedUser => {
  return {
    type: UPDATE_SINGLE_USER,
    updatedUser
  }
}

const updateSingleUserPassword = updatedUserPw => {
  return {
    type: UPDATE_SINGLE_USER_PW,
    updatedUserPw
  }
}

const removeAdminRights = updatedUser => {
  return {
    type: REMOVE_ADMIN_RIGHTS,
    updatedUser
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
    case REMOVE_ADMIN_RIGHTS:
      return action.updatedUser
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
    dispatch(updateSingleUserPassword(data))
  }
}

export const fetchRemoveAdminRights = userId => {
  return async dispatch => {
    const {data} = await axios.put(`/api/admin/users/${userId}/remove-admin`)
    dispatch(removeAdminRights(data))
  }
}
