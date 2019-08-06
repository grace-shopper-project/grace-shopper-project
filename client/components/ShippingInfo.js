import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import axios from 'axios'

const defaultState = {
  firstName: '',
  lastName: '',
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  zipCode: '',
  phone: ''
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
    event.preventDefault()
    try {
      const newOrder = await axios.post('/api/orders', this.state) //update axios post route on backend
      this.props.addNewOrder(newOrder.data) //make addNewStudent function and pass it down as props
      this.setState(defaultState)
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
                type="text"
                name="zipcode"
                value={this.state.zipcode}
                onChange={this.handleChange}
                style={{width: '25%'}}
              />
            </div>
          </form>
          <div
            className="purchase"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <button
              type="submit"
              style={{
                fontFamily: 'Josefin Sans, sans-serif',
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
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    streetAddress1: state.streetAddress1,
    streetAddress2: state.streetAddress2,
    city: state.city,
    state: state.state,
    zipCode: state.zipCode,
    phone: state.phone
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: cart => dispatch(fetchCart(cart))
  }
}

export default connect(mapState, mapDispatch)(ShippingInfo)
