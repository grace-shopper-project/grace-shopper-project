import React from 'react'
import {connect} from 'react-redux'
import {deleteReviews, fetchReviews} from '../store/allReviews'
import NewReview from '../components/NewReview'

export class AllReviews extends React.Component {
  componentDidMount() {
    return this.props.fetchReviews()
  }
  render() {
    const reviews = this.props.reviews
    return (
      <div>
        <header>Honest Reviews</header>
        {reviews.map(review => (
          <div key={review.id}>
            <Link to={`/reviews/${review.id}`}>
              <h3>
                {review.rating} {review.title}
              </h3>
            </Link>
            <p>
              <small>{review.createdAt}</small>
              <small>{review.content}</small>
              {isAdmin ? (
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault()
                    this.props.deletereview(review.id)
                  }}
                >
                  X
                </button>
              ) : (
                <div />
              )}
            </p>
            <small />
            <NewReview />
          </div>
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  reviews: state.review,
  isAdmin: true
})

const mapDispatchToProps = dispatch => ({
  deleteReviews: reviewId => dispatch(deleteReviews(reviewId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllReviews)
