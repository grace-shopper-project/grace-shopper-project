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
        <Alert variant="secondary">
          <Alert.Heading>Welcome to the Administrative Dashboard</Alert.Heading>
          <p>You manage users, products and orders from this dashboard.</p>
        </Alert>
        <UserManagement usersForAdmin={this.props.usersForAdmin} />
        <ProductManagement />
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
