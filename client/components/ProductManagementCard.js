import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {fetchDeleteProduct} from '../store/products'
import {connect} from 'react-redux'

const ProductManagementCard = props => {
  const url = `/products/${props.id}`
  return (
    <Card style={{margin: '1vw', width: '13vw'}}>
      <Card.Img variant="top" src={props.imageUrl} style={{width: '12vw'}} />
      <Card.Title style={{marginTop: '1vw'}}>{props.name}</Card.Title>
      <Card.Text>placeholder</Card.Text>
      {/* will eventually link button to the singleProduct page */}
      <Link to={url}>
        <button
          className="jos"
          type="button"
          style={{
            backgroundColor: '#86af2d',

            padding: '0.5vw',
            marginRight: '0.5vw'
          }}
        >
          Edit
        </button>
      </Link>
      <button
        className="jos"
        type="button"
        onClick={() => props.fetchDeleteProduct(props.id)}
        style={{
          backgroundColor: '#ed4934',

          padding: '0.5vw',
          marginLeft: '0.5vw'
        }}
      >
        Delete
      </button>
    </Card>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDeleteProduct: productId => {
      dispatch(fetchDeleteProduct(productId))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductManagementCard)
