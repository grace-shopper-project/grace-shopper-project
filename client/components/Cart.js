import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = []
  }

  componentDidMount() {
    this.props.fetchCart()
  }

  render() {
    return (
      <div>
        <div>
          <h1>Your Cart: </h1>
        </div>
        <div>
          <div>
            <p>Cart Body</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: cart => dispatch(fetchCart(cart))
  }
}

export default connect(mapState, mapDispatch)(Cart)
