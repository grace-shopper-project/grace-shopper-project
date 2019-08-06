const SEND_TOAST = 'SEND_TOAST'

export const setToast = status => ({
  type: SEND_TOAST,
  status
})

export const sendToast = status => {
  return dispatch => {
    try {
      dispatch(setToast(status))
      setTimeout(() => {
        dispatch(setToast('hide'))
      }, 5000)
    } catch (err) {
      console.log(err)
    }
  }
}

export default function toastReducer(state = 'hide', action) {
  switch (action.type) {
    case SEND_TOAST:
      return action.status
    default:
      return state
  }
}
