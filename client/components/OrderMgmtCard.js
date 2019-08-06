import React from 'react'

const OrderMgmtCard = props => {
  return (
    <tr>
      <React.Fragment key={props.order.id}>
        <td>{props.order.id}</td>
        <td>{props.order.status}</td>
        <td>{props.order.address}</td>
        <td>{props.order.createdAt}</td>
      </React.Fragment>
    </tr>
  )
}

export default OrderMgmtCard
