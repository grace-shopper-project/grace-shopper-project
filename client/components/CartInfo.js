import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import MiniCart from './MiniCart'
import ShippingInfo from './ShippingInfo'

export class CartInfo extends React.Component {
  componentDidMount() {
    this.props.fetchCart()
  }

  render() {
    return (
      <div>
        <div>
          <h1 style={{textAlign: 'center'}}>Your Order: </h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row-wrap',
            justifyContent: 'center'
          }}
        >
          <div>
            <MiniCart />
          </div>
          <div
            style={{
              width: '34vw',
              height: '62vw',
              margin: '1vw'
            }}
          >
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h3 style={{marginBlockStart: '0vw'}}>
                Please enter your shipping info below:
              </h3>
            </div>
            <div
              style={{
                width: '34vw',
                height: '53vw',
                marginBottom: '2vw'
              }}
            >
              <ShippingInfo />
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

export default connect(mapState, mapDispatch)(CartInfo)
