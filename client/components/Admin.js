import React from 'react'
import UserManagement from './UserManagement'
import ProductManagement from './ProductManagement'
import {fetchUsersForAdmin} from '../store/usersForAdmin'
import {connect} from 'react-redux'
import Alert from 'react-bootstrap/Alert'

class Admin extends React.Component {
  componentDidMount() {
    this.props.fetchUsersForAdmin()
  }

  render() {
    return (
      <>
        <div style={{alignContent: 'center'}}>
          <h1>Welcome to the Administrative Dashboard</h1>
          <h2>You manage users, products and orders from this dashboard.</h2>
        </div>
        <div>
          <UserManagement usersForAdmin={this.props.usersForAdmin} />
        </div>
        <div>
          <div>
            <ProductManagement />
          </div>
          <div>Order Management</div>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersForAdmin: () => {
      return dispatch(fetchUsersForAdmin())
    }
  }
}

const mapStateToProps = state => {
  return {
    usersForAdmin: state.usersForAdmin
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
