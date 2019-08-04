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
          <h2>Welcome to the Administrative Dashboard</h2>
          <h3>You manage users, products and orders from this dashboard.</h3>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: '1vw'}}>
          <div style={{width: '27%', height: '90vh', overflow: 'scroll'}}>
            <UserManagement usersForAdmin={this.props.usersForAdmin} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: '70%',
              maxWidth: '70%',
              margin: '2vw'
            }}
          >
            <div style={{height: '40vh', border: 'solid black 1px'}}>
              Order Management
            </div>
            <div style={{overflow: 'scroll', height: '40vh'}}>
              <ProductManagement />
            </div>
          </div>
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
