import React from 'react'
import UserManagement from './UserManagement'
import ProductManagement from './ProductManagement'
import {fetchUsersForAdmin} from '../store/usersForAdmin'
import {connect} from 'react-redux'
// import Dropdown from 'react-bootstrap/Dropdown'
import OrderManagement from './OrderManagement'

class Admin extends React.Component {
  componentDidMount() {
    this.props.fetchUsersForAdmin()
  }

  render() {
    return (
      <>
        <div
          style={{
            display: 'block',
            textAlign: 'center'
          }}
        >
          <h2 style={{marginBlockEnd: '0'}}>
            Welcome to the Administrative Dashboard
          </h2>
          <h3>You manage users, products and orders from this dashboard.</h3>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: '1vw'}}>
          <div style={{width: '27%', height: '90vh'}}>
            <h3
              style={{
                marginTop: '1vh',
                textAlign: 'center',
                marginBlockEnd: '0'
              }}
            >
              All Users
            </h3>
            <div style={{height: '85vh', overflow: 'scroll'}}>
              <UserManagement usersForAdmin={this.props.usersForAdmin} />
            </div>
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
            <div
              style={{
                height: '40vh',
                marginTop: '0'
              }}
            >
              <div>
                <OrderManagement />
              </div>
            </div>
            <div style={{height: '40vh'}}>
              <h3 style={{textAlign: 'center', marginBlockEnd: '0'}}>
                All Products
              </h3>
              <div style={{overflow: 'scroll', height: '35vh'}}>
                <ProductManagement />
              </div>
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
