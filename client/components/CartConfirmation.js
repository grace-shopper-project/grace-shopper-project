import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {Card} from 'react-bootstrap'

export class CartDetails extends React.Component {
  constructor() {
    super()
    this.state = []
  }

  componentDidMount() {
    this.props.fetchCart()
  }

  render() {
    return <div />
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

export default connect(mapState, mapDispatch)(CartDetails)
