import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import {Card} from 'react-bootstrap'
import AllReviews from '../components/AllReviews'
export class SingleProduct extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     id,
  //     quantity
  //   }
  // }
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    this.props.fetchSingleProduct(id)
  }

  render() {
    const {singleProduct} = this.props
    const {inventoryQuantity} = this.props.singleProduct
    let quantity = []
    for (let i = 0; i < inventoryQuantity; i++) {
      quantity.push(Number(i + 1))
    }
    console.log('QUANTITY', inventoryQuantity)
    return (
      <div>
        {/* <h1 style={{textAlign: 'center', margin: '1vw'}}>Single Product</h1> */}
        <div className="productContainer" style={{marginTop: '2vw'}}>
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
                        onClick={this.handleSubmit}
                      >
                        <select onChange={this.handleChange}>
                          {quantity.map(function(num) {
                            return <option key={num}>{num}</option>
                          })}
                        </select>
                      </div>
                    </div>
                    <div style={{justifyContent: 'space-around'}}>
                      <button className="cart" type="button">
                        Add to cart!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <AllReviews productId={1} />
      </div>
    )
  }
}

const mapState = state => ({
  singleProduct: state.singleProduct
})

const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: id => dispatch(fetchSingleProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
