import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateCartThunk} from '../store/cart'
import {sendToast} from '../store/toast'

const ProductCard = props => {
  const url = `/products/${props.id}`
  return (
    <Card style={{margin: '2vw'}}>
      <Card.Img variant="top" src={props.imageUrl} style={{width: '15vw'}} />
      <Card.Title style={{marginTop: '1vw'}}>{props.name}</Card.Title>
      <Card.Text>${props.price}</Card.Text>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <button
            type="button"
            style={{
              width: '7vw',
              fontSize: '1vw',
              backgroundColor: '#f29f8f',
              color: 'white'
            }}
            onClick={function clicker() {
              props.addToCart({
                productId: props.id,
                quantity: 1,
                add: true
              })
              props.sendToast('show')
            }}
          >
            Add to cart
          </button>
        </div>
        <Link className="purchase" to={url}>
          <button
            type="button"
            style={{
              width: '6vw',
              fontSize: '1vw',
              marginLeft: '1vw',
              backgroundColor: '#82bbb5'
            }}
          >
            See more
          </button>
        </Link>
      </div>
    </Card>
  )
}

const mapDispatch = dispatch => {
  return {
    addToCart: cart => dispatch(updateCartThunk(cart)),
    sendToast: status => dispatch(sendToast(status))
  }
}

export default connect(null, mapDispatch)(ProductCard)
