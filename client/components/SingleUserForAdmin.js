import React from 'react'
import {
  fetchSingleUserForAdmin,
  fetchUpdatedSingleUserForAdmin,
  fetchRemoveAdminRights,
  fetchUpdatedSingleUserPassword
} from '../store/singleUserForAdmin'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

class SingleUserForAdmin extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
    this.props.fetchSingleUser(userId)
  }
  render() {
    return (
      <div
        style={{display: 'flex', justifyContent: 'center', marginTop: '2vh'}}
      >
        <Card
          style={{
            width: '60vw',
            height: '30vw',
            borderRadius: '15px',
            border: '1px solid black',
            padding: '1vw'
          }}
        >
          <Card.Body>
            <h3 style={{textAlign: 'center'}}>{this.props.user.name}</h3>
            <p style={{textAlign: 'center'}}>Email: {this.props.user.email}</p>
            {this.props.user.needsPwReset ? (
              <p>Password Update Scheduled</p>
            ) : (
              <Button
                style={{width: '10vw'}}
                onClick={() =>
                  this.props.fetchPasswordUpdateRQ(this.props.user.id)
                }
              >
                Schedule Password Update
              </Button>
            )}
            <p>
              {this.props.user.isAdmin ? (
                <>
                  <span>This user currently has administrative rights</span>
                  <Button
                    style={{width: '15vw', height: '4vh', marginLeft: '1vw'}}
                    onClick={() =>
                      this.props.fetchRemoveAdminRights(this.props.user.id)
                    }
                  >
                    Disable Admin Rights
                  </Button>
                </>
              ) : (
                <>
                  <span>This user does not have administrative rights</span>
                  <Button
                    style={{width: '15vw', height: '4vh', marginLeft: '1vw'}}
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
              <Button style={{width: '15vw', height: '4vh', marginTop: '20vh'}}>
                Back to Admin Dashboard
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
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
