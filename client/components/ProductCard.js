import React from 'react'
import {Card, Button} from 'react-bootstrap'

const ProductCard = props => {
  return (
    <Card>
      <Card.Img variant="top" src="props.imageUrl" />
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>placeholder</Card.Text>
      {/* will eventually link button to the singleProduct page */}
      <Button variant="primary">See Product</Button>
    </Card>
  )
}

export default ProductCard
