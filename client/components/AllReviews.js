import React from 'react'
import {connect} from 'react-redux'
import {Card, CardDeck, Button} from 'react-bootstrap'
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
        <div>
          <h1 style={{textAlign: 'center'}}>Honest Reviews</h1>
        </div>
        <div>
          <CardDeck
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {reviews.map(review => (
              <Card
                key={review.id}
                style={{
                  border: '1px solid black',
                  margin: '2vw',
                  width: '60vw'
                }}
              >
                <Card.Header
                  style={{
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{margin: '1vw'}}>Item Name: </div>
                  <div style={{margin: '1vw'}}>Rating: {review.rating}</div>
                </Card.Header>
                <Card.Body style={{border: '1px solid black'}}>
                  <Card.Title>
                    <h3>{review.title}</h3>
                  </Card.Title>
                  <Card.Text>{review.content}</Card.Text>
                  {/* add link */}
                  <button
                    type="button"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      margin: '1vw',
                      border: '1px solid black',
                      borderRadius: '15px'
                    }}
                  >
                    Go somewhere
                  </button>
                </Card.Body>
                <Card.Footer
                  className="text-muted"
                  style={{
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{width: '50%', margin: '1vw'}}>Written by:</div>
                  <div style={{width: '50%', margin: '1vw'}}>
                    Date of Review: {new Date(review.createdAt).toDateString()}
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </CardDeck>
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

{
  /* {reviews ? (
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
        )} */
}
{
  /* <div>
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
              )} */
}
{
  /* </p> */
}
{
  /* // </div> */
}
