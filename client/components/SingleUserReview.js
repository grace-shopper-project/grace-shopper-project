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

const SingleUserReview = props => {
  return (
    <>
      <h1>Reviews</h1>
      <CardDeck>
        {props.reviewsForUser.map(review => {
          return (
            <Card style={{width: '20vw'}} key={review.id}>
              <Card.Body>
                <Card.Title>{review.title}</Card.Title>
                <Card.Text>{review.content}</Card.Text>
                <Button variant="primary">See this User</Button>
              </Card.Body>
            </Card>
          )
        })}
      </CardDeck>
    </>
  )
}
export default SingleUserReview
