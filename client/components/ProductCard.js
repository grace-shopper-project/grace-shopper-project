import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ProductCard = props => {
  console.log(props)
  const url = `/products/${props.id}`
  return (
    <Card style={{margin: '1vw'}}>
      <Card.Img variant="top" src={props.imageUrl} style={{width: '12vw'}} />
      <Card.Title style={{marginTop: '1vw'}}>{props.name}</Card.Title>
      <Card.Text>placeholder</Card.Text>
      {/* will eventually link button to the singleProduct page */}
      <Link to={url}>
        <Button variant="primary">See more</Button>
      </Link>
    </Card>
  )
}

export default ProductCard
