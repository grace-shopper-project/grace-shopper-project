import React from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/orders'
import {withRouter} from 'react-router-dom'
class Order extends React.Component {
  componentDidMount() {
    this.props.fetchOrders()
  }

  render() {
    const orders = this.props.orders
    return (
      <div>
        <h1>Your Orders</h1>
        {orders.map(order => (
          <div key={order.id}>
            <small>{order.id}</small>
            <p>{order.date}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleUser: state.singleUser,
    orders: state.orders
  }
}

const mapDispatch = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  }
}

export default withRouter(connect(mapState, mapDispatch)(Order))
