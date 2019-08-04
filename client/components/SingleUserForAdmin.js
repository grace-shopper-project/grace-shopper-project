import React from 'react'
import {
  fetchSingleUserForAdmin,
  fetchUpdatedSingleUserForAdmin,
  fetchUpdatedSingleUserPassword
} from '../store/singleUserForAdmin'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'

class SingleUserForAdmin extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
    this.props.fetchSingleUser(userId)
  }
  render() {
    return (
      <>
        <p>Name:</p>
        <div>{this.props.user.name}</div>
        <p>Email: {this.props.user.email}</p>
        {this.props.user.needsPwReset ? (
          <p>Password Updated Scheduled</p>
        ) : (
          <Button
            onClick={() => this.props.fetchPasswordUpdateRQ(this.props.user.id)}
          >
            Schedule Password Update
          </Button>
        )}
        <p>
          {this.props.user.isAdmin ? (
            <>Currently has administrative rights</>
          ) : (
            <>
              <>Does not have administrative rights</>
              <Button
                variant="primary"
                onClick={() =>
                  this.props.fetchUpdatedSingleUser(this.props.user.id)
                }
              >
                Allow Administrative Rights
              </Button>
            </>
          )}
        </p>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserForAdmin)
