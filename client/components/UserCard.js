import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const UserCard = props => {
  const url = `/users/${props.id}`
  return (
    <Card style={{margin: '1vw'}}>
      <Card.Img variant="top" src={props.imageUrl} style={{width: '12vw'}} />
      <Card.Title style={{marginTop: '1vw'}}>{props.name}</Card.Title>
      <Card.Text>placeholder</Card.Text>
      {/* will eventually link button to the singleUser page */}
      <Link to={url}>
        <Button variant="primary">Reviews</Button>
      </Link>
    </Card>
  )
}

export default UserCard
