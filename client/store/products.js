import axios from 'axios'

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})

const searchProducts = searchedProducts => ({
  type: SEARCH_PRODUCTS,
  searchedProducts
})

const deleteProduct = productId => ({
  type: DELETE_PRODUCT,
  productId
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

export const fetchSearchedProducts = searchName => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products/search', {
        params: {searchName}
      })
      dispatch(searchProducts(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchDeleteProduct = productId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${productId}`)
      dispatch(deleteProduct(productId))
    } catch (err) {
      console.log(err)
    }
  }
}

export default function productReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    case SEARCH_PRODUCTS:
      return action.searchedProducts
    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.productId)
    default:
      return state
  }
}
