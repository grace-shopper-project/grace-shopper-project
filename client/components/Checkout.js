import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://get-this-bread-shop.herokuapp.com'
  : 'https://localhost:8080';


export default class Checkout extends React.Component {
  onToken = (amount, description) =>  {
    axios.post(PAYMENT_SERVER_URL, )
  }

  render() {
    const {
      firstName,
      lastName,
      streetAddress1,
      streetAddress2,
      city,
      state,
      zipCode,
      phone
    } = this.props.info
    return (
      <StripeCheckout stripeKey="pk_test_f73ZiCX75vLgXX6P6EJC4jeU00O3LpELgt" />
    )
  }
}
