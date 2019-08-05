import React from 'react'
import {connect} from 'react-redux'
import {fetchCart, removeFromCartThunk} from '../store/cart'
import {Card} from 'react-bootstrap'

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
              height: '75vw',
              border: '1px solid black',
              margin: '2vw'
            }}
          >
            <div>
              <h3 style={{textAlign: 'left', margin: '2vw'}}>Order #: </h3>
              <h3 style={{textAlign: 'left', margin: '2vw'}}>Subtotal: </h3>
            </div>
            <div className="deck">
              {!this.props.cart.products  ? (<h1>Your cart is empty!</h1>) : this.props.cart.products.map(item => {
                return (
                  <Card
                    key={item.id}
                    style={{
                      height: '12vw',
                      width: '40vw',
                      marginBottom: '1vh',
                      border: 'solid black 1px',
                      borderRadius: '5px',
                      paddingBottom: '1vw'
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
                            width: '30%'
                            // marginLeft: 'vw'
                          }}
                        >
                          <img
                            src={item.imageUrl}
                            style={{
                              height: '8vw',
                              width: '10vw',
                              verticalAlign: 'center',
                              margin: '1vw'
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            width: '60%',
                            height: '10vw'
                          }}
                        >
                          <div>
                            <h4>Product: {item.name}</h4>
                            <h4>Price: ${item.price}</h4>
                            <div>
                              <h4>Quantity: {item.cartDetails.quantity}</h4>
                            </div>
                            <div
                              style={{
                                height: '4vw',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                paddingBottom: '3vw'
                              }}
                            >
                              <div>
                                {/* <Link to= "editcart"/> */}
                                <button
                                  type="button"
                                  style={{
                                    backgroundColor: '#86af2d',
                                    fontFamily: 'Josefin Sans, sans-serif',
                                    padding: '0.5vw',
                                    marginRight: '0.5vw'
                                  }}
                                  // onClick
                                >
                                  Edit
                                </button>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  style={{
                                    backgroundColor: '#ed4934',
                                    fontFamily: 'Josefin Sans, sans-serif',
                                    padding: '0.5vw',
                                    marginLeft: '0.5vw'
                                  }}
                                  onClick = {() => this.props.removeFromCart(item.id)}
                                >
                                  Delete
                                </button>
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
    fetchCart: cart => dispatch(fetchCart(cart)),
    removeFromCart: productId => dispatch(removeFromCartThunk(productId))
  }
}

export default connect(mapState, mapDispatch)(Cart)
