import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleUser, deleteReviews} from '../store/singleUser'
import {fetchReviews} from '../store/allReviews'
import {Card} from 'react-bootstrap'
import history from '../history'
import {withRouter, Link} from 'react-router-dom'

export class SingleUser extends React.Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    this.props.fetchSingleUser(id)
    // this.props.deleteReview(id)
    this.props.fetchReviews()
  }

  render() {
    const {singleUser} = this.props
    const reviews = singleUser.reviews
    const orders = SingleUser.orders
    return (
      <div>
        <header>Reviews</header>
        {singleUser.reviews ? (
          <div>
            <h5>Your Reviews</h5>
            <div>
              {reviews.map(review => (
                <div key={review.id}>
                  <small> *{review.rating} stars*</small>
                  <Link to={`/reviews/${review.id}`}>
                    <small>{review.title}</small>
                  </Link>
                  <small>{new Date(review.createdAt).toDateString()}</small>
                  <p>{review.content}</p>
                  <button
                    type="submit"
                    onClick={() => this.props.deleteReview(review.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <h5>Your Orders</h5>
            {/* <div>
              {orders.map(order => (
                <div key={order.id}>
                  <small>{order.title}</small>
                  <small>{new Date(order.createdAt).toDateString()}</small>
                  <button
                    type="submit"
                    onClick={() => this.props.deleteReview(order.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div> */}
          </div>
        ) : (
          <div>No Orders Yet! Buy some from the best!</div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleUser: state.singleUser,
    allReviews: state.allReviews
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    deleteReview: reviewId => dispatch(deleteReviews(reviewId)),
    fetchReviews: () => dispatch(fetchReviews())
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleUser))
