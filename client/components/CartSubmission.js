// enter your shipping address and billing info
import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
// import {CartDetail} from './CartDetail'

export class CartSubmission extends React.Component {
  constructor() {
    super()
    this.state = []
  }

  componentDidMount() {
    this.props.fetchCart()
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <h1 style={{textAlign: 'center'}}>Your Cart: </h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <div
            className="orderList"
            style={{
              width: '40vw',
              height: '60vw',
              border: '2px solid black',
              margin: '2vw'
            }}
          >
            <h1>Order:</h1>
            {/* <CartDetail /> */}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
          >
            <div
              style={{
                width: '30vw',
                height: '26vw',
                border: '2px solid black',
                margin: '2vw'
              }}
            >
              <h1>Shipping Info: </h1>
            </div>
            <div
              style={{
                width: '30vw',
                height: '26vw',
                border: '2px solid black',
                margin: '2vw'
              }}
            >
              <h1>Billing Info: </h1>
            </div>
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

export default connect(mapState, mapDispatch)(CartSubmission)
