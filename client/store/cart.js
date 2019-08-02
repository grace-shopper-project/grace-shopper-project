const axios = require('axios')

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const CLEAR_CART = 'CLEAR_CART' //allows user to empty cart

const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

// const addToCart = (userId, product, quantity) => {
//   return {
//     type: ADD_TO_CART,
//     userId,
//     product,
//     quantity
//   }
// }

// const removeFromCart = product => {
//   return {
//     type: REMOVE_FROM_CART,
//     product
//   }
// }

const updateCart = (product, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    product,
    quantity
  }
}

const clearCart = () => ({
  type: CLEAR_CART
})

export function fetchCart() {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cart`)
      dispatch(getCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// //unfinished
// export function addToCartThunk({user, product, quantity}) {
//   return async dispatch => {
//     try {
//       const {data} = await axios.put(`/api/cart`, {user, product, quantity}) //need product and quant info
//       dispatch(addToCart(data))
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

// //unfinished
// export function removefromCartThunk() {
//   return async dispatch => {
//     try {
//       const {data} = await axios.put(`/api/cart`) // need productinfo
//       dispatch(removeFromCart(data))
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

//unfinished
export function updateCartThunk() {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/cart`) //need product and quant info
      dispatch(updateCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return [...state, {product: action.product, quantity: action.quantity}]
    case REMOVE_FROM_CART:
      const filteredState = state.filter(object => {
        return object.product !== action.product
      })
      return filteredState
    case UPDATE_QUANTITY:
      const newState = state.map(object => {
        if (object.product === action.product) {
          object.quantity = action.quantity
        }
        return object
      })
      return newState
    case CLEAR_CART:
      return []
    default:
      return state
  }
}
