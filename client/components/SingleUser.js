import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleUser} from '../store/singleUser'
import {deleteReviews, fetchReviews} from '../store/allReviews'
import {Card} from 'react-bootstrap'
import history from '../history'
import {withRouter, Link} from 'react-router-dom'
import {AllReviews} from './AllReviews'

export class SingleUser extends React.Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    this.props.fetchSingleUser(id)
    this.props.deleteReview(id)
    this.props.fetchReviews()
  }

  render() {
    const {singleUser} = this.props
    const reviews = singleUser.reviews

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
          </div>
        ) : (
          <div>No Reviews Yet! Try and Make some!</div>
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
