import React from 'react'
import {connect} from 'react-redux'
import {deleteReview, fetchReviews} from '../store/allReviews'
import NewReview from '../components/NewReview'
import {Link} from 'react-router-dom'
export class AllReviews extends React.Component {
  componentDidMount() {
    this.props.fetchReviews()
  }
  render() {
    const reviews = this.props.reviews
    const isAdmin = this.props.isAdmin
    console.log(reviews)
    return (
      <div>
        <header>Honest Reviews</header>
        {reviews &&
          reviews.map(review => (
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
const mapStateToProps = (state, ownProps) => {
  console.log('Props', ownProps)
  return {
    reviews: state.review,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatchToProps = dispatch => ({
  fetchReviews: review => dispatch(fetchReviews(review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllReviews)
