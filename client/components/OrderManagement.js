import React from 'react'
import {connect} from 'react-redux'
import {fetchAllOrders, fetchSearchedOrders} from '../store/orderManagement'
import OrderMgmtCard from './OrderMgmtCard'
import {Table, Dropdown} from 'react-bootstrap'

class OrderManagement extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.fetchAllOrders()
  }

  handleClick(event) {
    event.preventDefault()
    console.log('call from handleClick value: ', event.target.value)
    this.props.fetchSearchedOrders(event.target.value)
  }

  render() {
    return (
      <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h3 style={{marginRight: '2vw'}}>All Orders</h3>
          <Dropdown style={{marginLeft: '2vw'}}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter by Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                value="cart"
                onClick={this.handleClick}
              >
                cart
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                value="processing"
                onClick={this.handleClick}
              >
                processing
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                value="cancelled"
                onClick={this.handleClick}
              >
                cancelled
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-4"
                value="completed"
                onClick={this.handleClick}
              >
                completed
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div
          style={{
            height: '35vh',
            overflow: 'scroll',
            border: 'solid black 1px'
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id Number</th>
                <th>Status</th>
                <th>Address</th>
                <th>Date Submitted</th>
              </tr>
            </thead>
            <tbody>
              {this.props.orders.map(order => {
                return <OrderMgmtCard order={order} key={order.id} />
              })}
            </tbody>
          </Table>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllOrders: () => {
      dispatch(fetchAllOrders())
    },
    fetchSearchedOrders: status => {
      dispatch(fetchSearchedOrders(status))
    }
  }
}

const mapStateToProps = state => {
  return {
    orders: state.allOrdersForAdmin
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderManagement)
