import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import {toast} from 'react-toastify'
import {connect} from 'react-redux'

toast.configure()

const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://get-this-bread-shop.herokuapp.com/api/stripe/checkout'
    : 'http://localhost:8080/api/stripe/checkout'

class Checkout extends React.Component {
  constructor(){
    super()
    this.handleToken = this.handleToken.bind(this)
  }
  async handleToken(token, addresses) {
    const price = 15
    const name = 'bread'
    const product = {price, name}
    const response = await axios.post(PAYMENT_SERVER_URL, {token, product})
    const {status} = response.data
    if (status === 'success') {
      toast('Success! You cool person, check your email for details', {
        type: 'success'
      })
    } else {
      toast('Something wrong', {type: 'error'})
    }
  }

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_f73ZiCX75vLgXX6P6EJC4jeU00O3LpELgt"
        token={this.handleToken}
        billingAddress
        shippingAddress
      />
    )
  }
}

const mapState = state => {
  return {
    product: state.cart
  }
}

export default connect(mapState)(Checkout)
