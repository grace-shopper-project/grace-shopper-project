import React from 'react'
import {connect} from 'react-router-dom'

export default class CartDetail extends React.Component {
  render() {
    const product = this.props.cartDetail.product
    const price = this.props.cartDetail.price

    return (
      <div>
        <Card
          key={singleProduct.id}
          style={{
            width: '60vw',
            height: '30vw',
            borderRadius: '15px',
            border: '1px solid black',
            padding: '1vw'
          }}
        >
          <Card.Body>
            <div
              className="singleProductCard"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div className="singleProductImg">
                <Card.Img
                  style={{width: '27vw', margin: '2vw'}}
                  variant="left"
                  src={singleProduct.imageUrl}
                />
              </div>
              <div
                className="singleProductInfo"
                style={{width: '27vw', margin: '2vw'}}
              >
                <Card.Title style={{fontSize: '2vw', margin: '2vw'}}>
                  {singleProduct.name}
                </Card.Title>
                <Card.Text style={{fontSize: '1.25vw'}}>
                  {singleProduct.description}
                </Card.Text>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: '2vw'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      margin: '0.75vw',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        paddingTop: '0.5vw',
                        margin: '1vw',
                        fontSize: '1.25vw'
                      }}
                    >
                      <p>Quantity:</p>
                    </div>
                    <div
                      style={{marginTop: '0.25vw'}}
                      className="dropdown"
                      type="submit"
                    >
                      <select name="quantity" onChange={this.handleChange}>
                        {quantity.map(function(num) {
                          return (
                            <option value={num} key={num}>
                              {num}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div style={{justifyContent: 'space-around'}}>
                    <button
                      className="cart"
                      type="button"
                      onClick={this.handleSubmit}
                    >
                      Add to cart!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
