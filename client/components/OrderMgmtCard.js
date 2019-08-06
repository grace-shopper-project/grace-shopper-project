import React from 'react'
import {fetchDeleteOrder} from '../store/orderManagement'
import {fetchSingleOrder} from '../store/singleOrderMgmt'
import {connect} from 'react-redux'

const OrderMgmtCard = props => {
  return (
    <tr>
      <React.Fragment key={props.order.id}>
        <td>{props.order.id}</td>
        <td>{props.order.status}</td>
        <td>{props.order.address}</td>
        <td>{props.order.createdAt}</td>
        <td>
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
    },
    fetchSingleOrder: userId => {
      dispatch(fetchSingleOrder(userId))
    }
  }
}

export default connect(null, mapDispatchToProps)(OrderMgmtCard)
