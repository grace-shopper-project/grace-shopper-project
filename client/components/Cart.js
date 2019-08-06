import React from 'react'
import {connect} from 'react-redux'
import {fetchCart, removeFromCartThunk} from '../store/cart'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = []
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.cart.products.length !== this.state.cart.products.length){
  //     this.props.fetchCart()
  //   }
  // }

  render() {
    const inventory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

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
              <h4 style={{textAlign: 'left', margin: '2vw'}}>Subtotal: </h4>
            </div>
            <div className="deck">
              {!this.props.cart.products ? (
                <h1>Your cart is empty!</h1>
              ) : (
                this.props.cart.products.map(item => {
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
                                type="button"
                                style={{
                                  backgroundColor: '#ed4934',
                                  fontFamily: 'Josefin Sans, sans-serif',
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
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  textAlign: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                <h5
                                  style={{
                                    marginBlockStart: '0vw',
                                    marginBlockEnd: '0vw'
                                  }}
                                >
                                  Change Quantity:
                                </h5>
                                <div
                                  style={{
                                    width: '4vw',
                                    height: '2vw',
                                    marginLeft: '1vw'
                                  }}
                                  className="dropdown"
                                  type="submit"
                                  onClick={this.handleSubmit}
                                >
                                  <select
                                    style={{
                                      width: '4vw',
                                      height: '2vw'
                                    }}
                                  >
                                    {inventory.map(function(num) {
                                      return (
                                        <option key={inventory.indexOf(num)}>
                                          {num}
                                        </option>
                                      )
                                    })}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  )
                })
              )}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Link
                className="purchase"
                to="/cart/info"
                type="submit"
                style={{
                  fontFamily: 'Josefin Sans, sans-serif',
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
    removeFromCart: productId => dispatch(removeFromCartThunk(productId))
  }
}

export default connect(mapState, mapDispatch)(Cart)
