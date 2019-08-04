import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {fetchDeleteSingleUserForAdmin} from '../store/usersForAdmin'
import {connect} from 'react-redux'

class UserManagement extends React.Component {
  render() {
    return (
      <div style={{border: 'solid black 0.1vw'}}>
        <h1 style={{padding: '2vw', marginTop: '1vh'}}>All Users</h1>
        <div className="deck">
          {this.props.usersForAdmin.map(user => {
            return (
              <Card
                style={{
                  width: '20vw',
                  border: 'solid black 1px',
                  marginBottom: '1vh'
                }}
                key={user.id}
              >
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.email}</Card.Text>
                  <Card.Text>
                    {user.isAdmin ? <>Is Admin: Yes</> : <>Is Admin: No</>}
                  </Card.Text>
                  <Link to={`/admin/users/${user.id}`}>
                    <Button variant="primary">Edit</Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => this.props.deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: userId => {
      dispatch(fetchDeleteSingleUserForAdmin(userId))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserManagement)
