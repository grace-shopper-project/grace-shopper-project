import React from 'react'
import {
  fetchSingleUserForAdmin,
  fetchUpdatedSingleUserForAdmin,
  fetchRemoveAdminRights,
  fetchUpdatedSingleUserPassword
} from '../store/singleUserForAdmin'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class SingleUserForAdmin extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
    this.props.fetchSingleUser(userId)
  }
  render() {
    return (
      <>
        <p>Name: {this.props.user.name}</p>
        <p>Email: {this.props.user.email}</p>
        {this.props.user.needsPwReset ? (
          <p>Password Update Scheduled</p>
        ) : (
          <Button
            onClick={() => this.props.fetchPasswordUpdateRQ(this.props.user.id)}
          >
            Schedule Password Update
          </Button>
        )}
        <p>
          {this.props.user.isAdmin ? (
            <>
              <span>Currently has administrative rights</span>
              <Button
                onClick={() =>
                  this.props.fetchRemoveAdminRights(this.props.user.id)
                }
              >
                Disable Admin Rights
              </Button>
            </>
          ) : (
            <>
              <span>Does not have administrative rights</span>
              <Button
                variant="primary"
                onClick={() =>
                  this.props.fetchUpdatedSingleUser(this.props.user.id)
                }
              >
                Allow Admin Rights
              </Button>
            </>
          )}
        </p>
        <Link to="/admin">
          <Button>Back to Admin Dashboard</Button>
        </Link>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.singleUserForAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleUser: userId => {
      return dispatch(fetchSingleUserForAdmin(userId))
    },
    fetchUpdatedSingleUser: userId => {
      return dispatch(fetchUpdatedSingleUserForAdmin(userId))
    },
    fetchPasswordUpdateRQ: userId => {
      return dispatch(fetchUpdatedSingleUserPassword(userId))
    },
    fetchRemoveAdminRights: userId => {
      return dispatch(fetchRemoveAdminRights(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserForAdmin)
