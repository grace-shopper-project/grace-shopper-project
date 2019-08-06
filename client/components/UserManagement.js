import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {
  fetchDeleteSingleUserForAdmin,
  fetchUsersForAdmin,
  fetchSearchedUsers
} from '../store/usersForAdmin'
import {connect} from 'react-redux'

class UserManagement extends React.Component {
  constructor() {
    super()
    this.state = {
      userSearch: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    this.props.fetchUsers()
  }

  handleOnChange(event) {
    this.setState({userSearch: event.target.value})
  }

  async handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      await this.props.fetchSearchedUsers(this.state.userSearch)
    }
  }

  render() {
    return (
      <div>
        <h3
          style={{marginTop: '1vh', textAlign: 'center', marginBlockEnd: '0'}}
        >
          All Users
        </h3>
        <input
          type="text"
          value={this.state.userSearch}
          placeholder="search for user"
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="deck">
          {this.props.usersForAdmin.map(user => {
            return (
              <Card
                style={{
                  width: '28vw',
                  marginBottom: '1vh',
                  border: 'solid black 1px',
                  borderRadius: '5px',
                  paddingTop: '1vw',
                  paddingBottom: '1vw'
                }}
                key={user.id}
              >
                <Card.Body style={{fontSize: '1.25vw'}}>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.email}</Card.Text>
                  <Card.Text>
                    {user.isAdmin ? <>Is Admin: Yes</> : <>Is Admin: No</>}
                  </Card.Text>
                  <Link to={`/admin/users/${user.id}`}>
                    <button
                      type="button"
                      className="jos"
                      style={{
                        backgroundColor: '#86af2d',
                        
                        padding: '0.5vw',
                        marginRight: '0.5vw'
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="jos"
                    style={{
                      backgroundColor: '#ed4934',
                      padding: '0.5vw',
                      marginLeft: '0.5vw'
                    }}
                    onClick={() => this.props.deleteUser(user.id)}
                  >
                    Delete
                  </button>
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
    },
    fetchUsers: () => {
      dispatch(fetchUsersForAdmin())
    },
    fetchSearchedUsers: userSearch => {
      dispatch(fetchSearchedUsers(userSearch))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserManagement)
