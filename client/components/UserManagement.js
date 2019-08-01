import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

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
                <Button variant="primary">See this User</Button>
              </Card.Body>
            </Card>
          )
        })}
      </CardDeck>
    </>
  )
}

export default UserManagement
