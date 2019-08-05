import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {Card} from 'react-bootstrap'

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = []
  }

  componentDidMount() {
    this.props.fetchCart()
  }

  render() {
    const fakeCart = [
      {
        quantity: 1,
        cartId: 10,
        productId: 3,
        productName: 'Birthday Cake',
        productPrice: 20
      },
      {
        quantity: 5,
        cartId: 10,
        productId: 4,
        productName: 'Cookie',
        productPrice: 3
      },
      {
        quantity: 5,
        cartId: 10,
        productId: 13,
        productName: 'Cupcake',
        productPrice: 2
      },
      {
        quantity: 13,
        cartId: 10,
        productId: 5,
        productName: 'Doughnut',
        productPrice: 2
      }
    ]

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
              border: '1px solid black',
              margin: '2vw'
            }}
          >
            <div>
              <h3 style={{textAlign: 'left', margin: '2vw'}}>Cart ID: </h3>
              <h3 style={{textAlign: 'left', margin: '2vw'}}>Subtotal: </h3>
            </div>
            <div
              className="deck"
              style={{
                height: '60'
              }}
            >
              {fakeCart.map(item => {
                return (
                  <Card
                    key={item.id}
                    style={{
                      height: '13vw',
                      width: '34vw',
                      marginBottom: '1vh',
                      border: 'solid black 1px',
                      borderRadius: '5px'
                      // paddingBottom: '1vw'
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
                            src="favicon.ico"
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
                                // margin: '1vw'
                              }}
                              // onClick = {() => this.props.removeProductFromCart(productId)}
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
                            // paddingTop: '1vw',
                            marginLeft: '3vw'
                          }}
                        >
                          <div style={{padding: '1vw'}}>
                            <h4
                              style={{
                                marginBlockStart: '0vw',
                                marginBlockEnd: '0vw',
                                paddingTop: '1vw',
                                paddingBottom: '1vw'
                              }}
                            >
                              Product: {item.productName}
                            </h4>
                            <h4
                              style={{
                                marginBlockStart: '0vw',
                                marginBlockEnd: '0vw',
                                paddingBottom: '1vw'
                              }}
                            >
                              Price: ${item.productPrice}
                            </h4>
                            <h4
                              style={{
                                marginBlockStart: '0vw',
                                marginBlockEnd: '0vw'
                              }}
                            >
                              Quantity: {item.quantity}
                            </h4>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                textAlign: 'center',
                                alignItems: 'center',
                                paddingTop: '0.75vw'
                              }}
                            >
                              <h4
                                style={{
                                  marginBlockStart: '0vw',
                                  marginBlockEnd: '0vw'
                                }}
                              >
                                {' '}
                                Change Quantity:{' '}
                              </h4>
                              <div
                                style={{
                                  width: '4vw',
                                  height: '2vw',
                                  marginTop: '0.25vw',
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
                                  onChange={this.handleChange}
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
              })}
            </div>
            {/* <CartDetail /> */}
            <div
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
                  fontSize: '1.5vw',
                  height: '3.5vw',
                  border: '2px solid black',
                  borderRadius: '15px',
                  textAlign: 'center',
                  padding: '1vw',
                  marginTop: '1vw',
                  backgroundColor: '#3C70C0'
                }}
              >
                Proceed to checkout!
              </button>
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

export default connect(mapState, mapDispatch)(Cart)
