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
      <h3 style={{textAlign: 'center'}}>Orders</h3>
      <CardDeck>
        {props.ordersForUser.map(order => {
          return (
            <Card
              style={{
                width: '40vw',
                border: '1px solid black',
                borderRadius: '15px',
                marginBottom: '1.5vw'
              }}
              key={order.id}
            >
              <Card.Body>
                <Card.Title>Order Status: {order.status}</Card.Title>
                <Card.Text>Shipping Address:{order.address}</Card.Text>
                <Card.Text>Order Subtotal:{order.subtotal}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </CardDeck>
    </>
  )
}
export default SingleUserOrder
