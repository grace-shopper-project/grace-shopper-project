import React from 'react'
import UserManagement from './UserManagement'
import {fetchUsersForAdmin} from '../store/usersForAdmin'
import {connect} from 'react-redux'

class Admin extends React.Component {
  componentDidMount() {
    this.props.fetchUsersForAdmin()
  }

  render() {
    return <UserManagement usersForAdmin={this.props.usersForAdmin} />
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
