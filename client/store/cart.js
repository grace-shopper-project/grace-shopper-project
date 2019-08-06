const axios = require('axios')

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const UPDATE_CART = 'UPDATE_CART'
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

const removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    productId
  }
}

const updateCart = cart => {
  return {
    type: UPDATE_CART,
    cart
  }
}

// const clearCart = () => ({
//   type: CLEAR_CART
// })

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

//unfinished
export function removeFromCartThunk(productId) {
  return async dispatch => {
    try {
      const {data} = await axios.delete(`/api/cart/`, {
        data: {productId: productId}
      }) // need productinfo
      dispatch(removeFromCart(productId))
    } catch (error) {
      console.log(error)
    }
  }
}

//unfinished
export function updateCartThunk(cart) {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/cart`, cart) //need product and quant info
      dispatch(updateCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return [...state, {product: action.product, quantity: action.quantity}]
    case REMOVE_FROM_CART:
      const filteredState = state.products.filter(product => {
        return product.id !== action.productId
      })
      return {...state, products: filteredState}
    case UPDATE_CART:
      // const newState = state.map(object => {
      //   if (object.product === action.product) {
      //     object.quantity = action.quantity
      //   }
      //   return object
      // })
      // return newState
      return action.cart
    case CLEAR_CART:
      return []
    default:
      return state
  }
}
