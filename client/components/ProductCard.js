import React from 'react'
import {Card, Button} from 'react-bootstrap'

const ProductCard = props => {
  return (
    <Card style={{margin: '1vw'}}>
      <Card.Img variant="top" src={props.imageUrl} style={{width: '12vw'}} />
      <Card.Title style={{marginTop: '1vw'}}>{props.name}</Card.Title>
      <Card.Text>placeholder</Card.Text>
      {/* will eventually link button to the singleProduct page */}
      <Button variant="primary">See more</Button>
    </Card>
  )
}

export default ProductCard
