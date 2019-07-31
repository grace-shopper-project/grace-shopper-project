import axios from 'axios'

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})

export const fetchProducts = (page = 1) => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products', {params: {page}})
      dispatch(getAllProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    default:
      return state
  }
}
