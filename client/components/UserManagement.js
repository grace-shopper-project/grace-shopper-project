import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom'

const UserManagement = props => {
  return (
    <>
      <h1>All Users</h1>
      <CardDeck>
        {props.usersForAdmin.map(user => {
          return (
            <Card style={{width: '20vw'}} key={user.id}>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>
                  {user.isAdmin ? <>Is Admin: Yes</> : <>Is Admin: No</>}
                </Card.Text>
                <Link to={`/admin/users/${user.id}`}>
                  <Button variant="primary">See this User</Button>
                </Link>
              </Card.Body>
            </Card>
          )
        })}
      </CardDeck>
    </>
  )
}

export default UserManagement
