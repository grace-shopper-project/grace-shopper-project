import React from 'react'
import {connect} from 'react-redux'
import {fetchReviews} from '../store/allReviews'
import {Link} from 'react-router-dom'
export class AllReviews extends React.Component {
  async componentDidMount() {
    await this.props.fetchReviews()
  }
  render() {
    const reviews = this.props.allReviews

    return (
      <div>
        <header>Honest Reviews</header>
        {reviews &&
          reviews.map(review => (
            <div key={review.id}>
              <p>*{review.rating} stars*</p>
              <Link to={`/reviews/${review.id}`}>
                <h3>{review.title}</h3>
              </Link>
              <small>{new Date(review.createdAt).toDateString()}</small>
              <p>
                <small>{review.content}</small>
                {/* {isAdmin ? (
                      <button
                        type="button"
                        onClick={e => {
                          e.preventDefault()
                          this.props.deleteReview(review.id)
                        }}
                      >
                        X
                      </button>
                    ) : (
                      <div />
                    )} */}
              </p>
              <small />
            </div>
          ))}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    allReviews: state.allReviews,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews())
  // deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllReviews)
