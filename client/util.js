// import {fetchCart} from './store/cart'
// import {connect} from 'react-redux'
export function calculateSubtotal(cart) {
  console.log('CARTTTTSS', cart)
  if (!cart) {
    return 0
  } else {
    return cart.products.reduce((accum, val) => {
      accum += val.cartDetails.total
      return accum
    }, 0)
  }
}
// const mapDispatch = dispatch => {
//   return {
//     fetchCart: cart => dispatch(fetchCart(cart))
//   }
// }
// export default connect(mapDispatch)(calculateSubtotal)
