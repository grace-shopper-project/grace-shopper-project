import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import axios from 'axios'
import Checkout from './Checkout'

const defaultState = {
  firstName: '',
  lastName: '',
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  zipCode: 0,
  phone: '',
  isClicked: false
}

export class ShippingInfo extends React.Component {
  constructor() {
    super()
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchCart()
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    console.log('In handle submit')
    event.preventDefault()
    try {
      let streetAddress = ''
      if (this.state.streetAddress2 === '') {
        streetAddress = this.state.streetAddress1
      } else {
        streetAddress = `${this.state.streetAddress1}, ${
          this.state.streetAddress2
        }`
      }
      const address = `${streetAddress}, ${this.state.city}, ${
        this.state.state
      } ${this.state.zipCode}`
      const subtotal = Number(
        document.querySelector('.checkoutSubtotal').innerText.split('$')[1]
      )
      const id = this.props.cart.id
      const newOrder = await axios.post('/api/orders', {address, subtotal, id}) //update axios post route on backend
      this.props.addNewOrder(newOrder.data) //make addNewStudent function and pass it down as props
      this.setState({defaultState})
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <div className="form">
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '3px dashed #3C70C0',
              padding: '2vw'
            }}
          >
            <div className="input">
              <label htmlFor="firstName">First Name </label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                style={{width: '50%'}}
              />
            </div>
            <div className="input">
              <label htmlFor="lastName">Last Name </label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                style={{width: '50%'}}
              />
            </div>
            <div className="input">
              <label htmlFor="streetAddress1">Street Address</label>
              <input
                type="text"
                name="streetAddress1"
                value={this.state.streetAddress1}
                onChange={this.handleChange}
                style={{width: '90%'}}
              />
            </div>
            <div className="input">
              <label htmlFor="streetAddress2">Additional Address Info:</label>
              <input
                type="text"
                name="streetAddress2"
                value={this.state.streetAddress2}
                onChange={this.handleChange}
                style={{width: '90%'}}
              />
            </div>
            <div className="input">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                style={{width: '50%'}}
              />
            </div>
            <div className="input">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.handleChange}
                style={{width: '25%'}}
              />
            </div>
            <div className="input">
              <label htmlFor="zipcode">Zip Code:</label>
              <input
                type="integer"
                name="zipCode"
                value={this.state.zipCode}
                onChange={this.handleChange}
                style={{width: '25%'}}
              />
            </div>
            <button
              className="jos"
              type="submit"
              style={{
                fontSize: '1.25vw',
                color: 'white',
                height: '3vw',
                border: '2px solid black',
                borderRadius: '15px',
                textAlign: 'center',
                padding: '0.75vw',
                marginTop: '2vw',
                backgroundColor: '#3C70C0'
              }}
            >
              Submit Order!
            </button>
          </form>
          <div
            className="purchase"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >

              <div>
                <Checkout  />
                <h1>HEY</h1>
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

export default connect(mapState, mapDispatch)(ShippingInfo)
