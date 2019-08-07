import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleUser, deleteReviews} from '../store/singleUser'
import {fetchReviewsForUsers} from '../store/userReviews'
import {Card} from 'react-bootstrap'
import history from '../history'
import {withRouter, Link} from 'react-router-dom'
import userHome from './user-home'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import StarRating from 'react-bootstrap-star-rating'

const SingleUserReview = props => {
  console.log('PROPS FOR REVIEWS', props)
  return (
    <>
      <h3 style={{textAlign: 'center', marginBlockEnd: '1'}}>Reviews</h3>
      <CardDeck style={{margin: '1vw', width: '13vw'}}>
        {props.reviewsForUser.map(review => {
          return (
            <Card style={{width: '20vw'}} key={review.id}>
              <Card.Body>
                <StarRating
                  style={{
                    textAlign: 'center',
                    marginBlockEnd: '-50',
                    marginRight: '50vw'
                  }}
                  defaultValue={review.rating}
                />
                <Card.Title style={{fontWeight: 'bold', marginTop: '1vw'}}>
                  {review.title}
                </Card.Title>
                <Card.Text style={{textAlign: 'center', marginBlockEnd: '1'}}>
                  {review.content}
                </Card.Text>
              </Card.Body>
              <button
                type="button"
                style={{
                  backgroundColor: '#ed4934',

                  padding: '0.5vw',
                  marginLeft: '0.5vw'
                }}
                onClick={() => props.deleteReviews(review.id)}
              >
                DELETE
              </button>
            </Card>
          )
        })}
      </CardDeck>
    </>
  )
}
export default SingleUserReview
