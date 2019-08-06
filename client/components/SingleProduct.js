import React from 'react'
import {connect} from 'react-redux'
import StarRating from 'react-bootstrap-star-rating'
import {fetchSingleProduct} from '../store/singleProduct'
import {fetchReview} from '../store/singleReview'
import {sendToast} from '../store/toast'
import {Card} from 'react-bootstrap'
import {withRouter, Link} from 'react-router-dom'
import {updateCartThunk} from '../store/cart'
import history from '../history'

export class SingleProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    this.props.fetchSingleProduct(id)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addToCart({
      productId: this.props.match.params.id,
      quantity: this.state.quantity,
      add: true
    })
    this.props.sendToast('show')
  }

  render() {
    const {singleProduct} = this.props
    const {inventoryQuantity} = this.props.singleProduct
    const reviews = singleProduct.reviews
    let quantity = []
    for (let i = 0; i < inventoryQuantity; i++) {
      quantity.push(Number(i + 1))
    }

    return (
      <div>
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
                    style={{width: '25vw', margin: '1vw'}}
                    variant="left"
                    src={singleProduct.imageUrl}
                  />
                </div>
                <div
                  className="singleProductInfo"
                  style={{width: '27vw', margin: '1vw'}}
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
                        Quantity:
                      </div>
                      <div
                        style={{marginTop: '0.25vw'}}
                        className="dropdown"
                        type="submit"
                      >
                        <select name="quantity" onChange={this.handleChange}>
                          {quantity.map(function(num) {
                            return (
                              <option
                                style={{verticalAlign: 'center'}}
                                value={num}
                                key={num}
                              >
                                {num}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                    </div>
                    <div>
                      <button
                        className="cart"
                        type="button"
                        onClick={this.handleSubmit}
                        style={{fontSize: '1.25vw', width: '10vw'}}
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '2vw',
            alignItems: 'center'
          }}
        >
          {singleProduct.reviews ? (
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <div>Reviews for Product #{singleProduct.id}</div>
                <div>
                  <Link
                    onClick={() => {
                      history.push('/reviews')
                    }}
                  >
                    See reviews for all of our products!
                  </Link>
                </div>
              </div>
              <div
                style={{
                  width: '45vw',
                  overflow: 'scroll'
                }}
              >
                {reviews.map(review => (
                  <div
                    style={{
                      margin: '1vw',
                      padding: '1vw',
                      border: '1px solid black',
                      borderRadius: '5px'
                    }}
                    key={review.id}
                  >
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      <Link to={`/reviews/${review.id}`}>
                        <h4>{review.title}</h4>
                      </Link>
                    </div>
                    <h5>{review.content}</h5>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <StarRating defaultValue={review.rating} />
                      <small>{new Date(review.createdAt).toDateString()}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>Sorry no reviews yet! Be the first one to review!</div>
          )}
          {singleProduct.reviews ? (
            <div>
              <button
                style={{margin: '1vw'}}
                type="button"
                onClick={() => {
                  history.push(`/reviews/new`)
                }}
              >
                Add A Review
              </button>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  singleProduct: state.singleProduct
  // reviews: state.singleProduct.reviews
})

const mapDispatch = dispatch => {
  return {
    // submitReview: review => dispatch(submitReview(review)),
    fetchSingleProduct: id => dispatch(fetchSingleProduct(id)),
    fetchReviewForm: reviewId => dispatch(fetchReview(reviewId)),
    // submitReviews: (review, productId) =>
    //   dispatch(submitReviews(review, productId)),
    addToCart: cart => dispatch(updateCartThunk(cart)),
    sendToast: status => dispatch(sendToast(status))
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))

// this.props.submitReviews(
//   singleProduct.reviews,
//   singleProduct.id
// )
