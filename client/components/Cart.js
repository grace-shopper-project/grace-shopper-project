import React from 'react'
import {connect} from 'react-redux'
import {fetchCart, removeFromCartThunk, updateCartThunk} from '../store/cart'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import CartDropdown from './CartDropdown'

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({
      quantity: Number(evt.target.value)
    })
  }

  handleSubmit(productId) {
    this.props.updateCart({
      productId: productId,
      quantity: this.state.quantity
    })
  }

  render() {
    if (!this.props.cart.products) {
      return <h1>Your Cart is empty!</h1>
    } else
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
                width: '44vw',
                height: '72vw',
                border: '3px dashed #3C70C0',
                margin: '2vw',
                overflow: 'scroll'
              }}
            >
              <div>
                <h4 style={{textAlign: 'left', margin: '2vw'}}>Cart ID: </h4>
                <h4 style={{textAlign: 'left', margin: '2vw'}}>
                  {`Subtotal: $${this.props.cart.products.reduce(
                    (accum, val) => {
                      accum += val.cartDetails.total
                      return accum
                    },
                    0
                  )}`}{' '}
                </h4>
              </div>
              <div className="deck">
                {this.props.cart.products.map(item => {
                  return (
                    <Card
                      key={item.id}
                      style={{
                        height: '13vw',
                        width: '34vw',
                        marginBottom: '1vh',
                        border: 'solid black 1px',
                        borderRadius: '5px'
                      }}
                    >
                      <Card.Body style={{fontSize: '1.25vw'}}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                          }}
                        >
                          <div
                            style={{
                              justifyContent: 'left',
                              width: '35%',
                              marginLeft: '1vw'
                            }}
                          >
                            <img
                              src={item.imageUrl}
                              style={{
                                height: '8vw',
                                width: '8vw',
                                verticalAlign: 'center',
                                margin: '0.75vw'
                              }}
                            />

                            <div>
                              <button
                                className="jos"
                                type="button"
                                style={{
                                  backgroundColor: '#ed4934',

                                  fontSize: '1vw',
                                  padding: '0.5vw'
                                }}
                                onClick={() =>
                                  this.props.removeFromCart(item.id)
                                }
                              >
                                Remove from cart
                              </button>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              textAlign: 'left',
                              width: '60%',
                              height: '10vw',
                              marginLeft: '3vw'
                            }}
                          >
                            <div>
                              <h5 style={{marginTop: '2.5vw'}}>
                                Product: {item.name}
                              </h5>
                              <h5>Price: ${item.price}</h5>
                              <div>
                                <h5>Quantity: {item.cartDetails.quantity}</h5>
                              </div>
                              <CartDropdown
                                inventory={item.inventoryQuantity}
                                handleChange={this.handleChange}
                              />
                              <button
                                className="cart"
                                type="button"
                                onClick={() => this.handleSubmit(item.id)}
                                style={{fontSize: '0.75vw', width: '7vw'}}
                              >
                                Update Cart!
                              </button>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  )
                })}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}
              >
                <Link
                  className="purchase jos"
                  to="/cart/info"
                  type="submit"
                  style={{
                    fontSize: '1.5vw',
                    height: '3.5vw',
                    border: '2px solid black',
                    borderRadius: '15px',
                    textAlign: 'center',
                    padding: '0.75vw',
                    marginTop: '1vw',
                    marginBottom: '1vw',
                    backgroundColor: '#3C70C0'
                  }}
                >
                  Proceed to checkout!
                </Link>
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
    fetchCart: cart => dispatch(fetchCart(cart)),
    removeFromCart: productId => dispatch(removeFromCartThunk(productId)),
    updateCart: cart => dispatch(updateCartThunk(cart))
  }
}

export default connect(mapState, mapDispatch)(Cart)
