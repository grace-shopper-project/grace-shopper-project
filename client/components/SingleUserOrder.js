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
  console.log('PROPS FOR ORDERS', props)
  return (
    <>
      <h1>Orders</h1>
      <CardDeck>
        {props.ordersForUser.map(order => {
          return (
            <Card style={{width: '20vw'}} key={order.id}>
              <Card.Body>
                <Card.Title>STATUS: {order.status}</Card.Title>
                <Card.Text>SHIPPING:{order.address}</Card.Text>
                <Card.Text>SUBTOTAL:{order.subtotal}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </CardDeck>
    </>
  )
}
export default SingleUserOrder
