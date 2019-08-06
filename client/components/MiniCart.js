import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {Card} from 'react-bootstrap'
import {capitalize} from '../../server/utils/helpers'

export class MiniCart extends React.Component {
  // constructor() {
  //   super()
  //   this.state = []
  // }

  // componentDidMount() {
  //   this.props.fetchCart()
  // }

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

    // const inventory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <div
            className="orderList"
            style={{
              width: '35vw',
              height: '56vw',
              border: '3px dashed #3C70C0',
              margin: '1vw',
              overflow: 'scroll'
            }}
          >
            <div style={{padding: '1.5vw'}}>
              <h4 style={{textAlign: 'left', margin: '1vw'}}>Username: </h4>
              <h4 style={{textAlign: 'left', margin: '1vw'}}>Account ID: </h4>
              <h4 style={{textAlign: 'left', margin: '1vw'}}>Cart ID: </h4>
              <h4 style={{textAlign: 'left', margin: '1vw'}}>Subtotal: </h4>
            </div>
            <div
              className="deck"
              style={{
                height: '56'
              }}
            >
              {fakeCart.map(item => {
                const properName = capitalize(item.name)
                return (
                  <Card
                    key={item.id}
                    style={{
                      height: '8vw',
                      width: '30vw',
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
                            src="/favicon.ico"
                            style={{
                              height: '6vw',
                              width: '6vw',
                              verticalAlign: 'center',
                              margin: '0.75vw'
                            }}
                          />
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
                          <div style={{padding: '1vw'}}>
                            <h5
                              style={{
                                marginBlockStart: '0vw',
                                marginBlockEnd: '0vw',
                                paddingBottom: '1vw'
                              }}
                            >
                              Product: {properName}
                            </h5>
                            <h5
                              style={{
                                marginBlockStart: '0vw',
                                marginBlockEnd: '0vw',
                                paddingBottom: '1vw'
                              }}
                            >
                              Price: ${item.productPrice}
                            </h5>
                            <h5
                              style={{
                                marginBlockStart: '0vw',
                                marginBlockEnd: '0vw'
                              }}
                            >
                              Quantity: {item.quantity}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                )
              })}
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

export default connect(mapState, mapDispatch)(MiniCart)
