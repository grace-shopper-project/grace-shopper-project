import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrder} from '../store/singleOrderMgmt'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class SingleOrderMgmt extends React.Component {
  async componentDidMount() {
    const orderId = Number(this.props.match.params.orderId)
    console.log('orderId: ', orderId)
    await this.props.fetchSingleOrder(orderId)
  }
  render() {
    return (
      <div
        style={{display: 'flex', justifyContent: 'center', marginTop: '2vh'}}
      >
        <Card
          style={{
            width: '60vw',
            height: '30vw',
            borderRadius: '15px',
            border: '1px solid black',
            padding: '1vw'
          }}
        >
          <Card.Body>
            <h3 style={{textAlign: 'center'}}>Order #{this.props.order.id}</h3>
            <p style={{textAlign: 'center'}}>
              Status: {this.props.order.status}
            </p>

            <Link to="/admin">
              <Button style={{width: '15vw', height: '6vh', marginTop: '20vh'}}>
                Back to Admin Dashboard
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.singleOrderForAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleOrder: orderId => {
      dispatch(fetchSingleOrder(orderId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrderMgmt)
