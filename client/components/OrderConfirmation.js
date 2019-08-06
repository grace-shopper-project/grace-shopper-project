import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
// import {capitalize} from '../../server/utils/helpers'

export class OrderConfirmation extends React.Component {
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
        <div style={{textAlign: 'center', fontFamily: 'Corben, cursive'}}>
          <h2>
            <img src="/party.png" style={{width: '10vw', height: '10vw'}} />{' '}
            THANKS{' '}
            <img src="/party.png" style={{width: '10vw', height: '10vw'}} />
          </h2>
          <h4>
            We just received your order and our bakers are getting right on it!
          </h4>
          <h4>We'll email you an order confirmation soon.</h4>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '2vw'
          }}
        >
          <div
            style={{
              width: '45vw',
              height: '45vh',
              border: '1px solid black',
              marginRight: '1vw'
            }}
          >
            <h5 style={{textAlign: 'center'}}>ORDER SUMMARY:</h5>
          </div>
          <div
            style={{
              width: '45vw',
              height: '45vh',
              border: '1px solid black',
              marginRight: '1vw'
            }}
          >
            <h5 style={{textAlign: 'center'}}>SHIPPING INFO:</h5>
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

export default connect(mapState, mapDispatch)(OrderConfirmation)
