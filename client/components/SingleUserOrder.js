import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrder} from '../store/singleUser'
import {fetchReviewsForUsers} from '../store/userReviews'
import {Card} from 'react-bootstrap'
import history from '../history'
import {withRouter, Link} from 'react-router-dom'
import userHome from './user-home'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

const SingleUserOrder = props => {
  return (
    <>
      <h1>Orders</h1>
      <CardDeck>
        {props.ordersForUser.map(order => {
          return (
            <Card style={{width: '20vw'}} key={order.id}>
              <Card.Body>
                <Card.Title>{order.status}</Card.Title>
                <Card.Text>{order.address}</Card.Text>
                <Button variant="primary">See this User</Button>
              </Card.Body>
            </Card>
          )
        })}
      </CardDeck>
    </>
  )
}
export default SingleUserOrder
