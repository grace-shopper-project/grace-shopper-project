import axios from 'axios'

const SHOW_TOAST = 'SHOW_TOAST'
const HIDE_TOAST = 'HIDE_TOAST'

export const showToast = show => ({
  type: SHOW_TOAST,
  status: show
})

export const hideToast = hide => ({
  type: HIDE_TOAST,
  status: hide
})

export const toastReducer = (state = 'hide', action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return action.status
    case HIDE_TOAST:
      return action.status
    default:
      return state
  }
}

export default toastReducer
