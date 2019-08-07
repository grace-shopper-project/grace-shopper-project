import React from 'react'
import {fetchDeleteOrder} from '../store/orderManagement'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const OrderMgmtCard = props => {
  return (
    <tr>
      <React.Fragment key={props.order.id}>
        <td>{props.order.id}</td>
        <td>{props.order.status}</td>
        <td>{props.order.address}</td>
        <td>{props.order.createdAt}</td>
        <td>
          <Link to={`/admin/orders/${props.order.id}`}>
            <button type="button">Edit</button>
          </Link>
          <button
            type="button"
            onClick={() => props.deleteOrder(props.order.id)}
          >
            Delete
          </button>
        </td>
      </React.Fragment>
    </tr>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteOrder: userId => {
      dispatch(fetchDeleteOrder(userId))
    }
  }
}

export default connect(null, mapDispatchToProps)(OrderMgmtCard)
