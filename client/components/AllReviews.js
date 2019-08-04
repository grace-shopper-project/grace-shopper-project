import React from 'react'
import {connect} from 'react-redux'
import {Rater, Angry} from 'react-rater'
import {fetchReviews, deleteReviews} from '../store/allReviews'

import {Link} from 'react-router-dom'
import {NewReview} from '../components/NewReview'
export class AllReviews extends React.Component {
  async componentDidMount() {
    await this.props.fetchReviews()
  }
  render() {
    const reviews = this.props.allReviews
    const isAdmin = this.props.isAdmin

    return (
      <div>
        <header>Honest Reviews</header>
        {reviews ? (
          reviews.map(review => (
            <div key={review.id}>
              <p>{review.ratings}</p>
              <Link to={`/reviews/${review.id}`}>
                <h3>{review.title}</h3>
              </Link>
              <small>{new Date(review.createdAt).toDateString()}</small>
              <small>{review.content}</small>
            </div>
          ))
        ) : (
          <div />
        )}
        <div>
          <p>
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
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    allReviews: state.allReviews,
    isAdmin: state.user.isAdmin,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  deleteReview: reviewId => dispatch(deleteReviews(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllReviews)
