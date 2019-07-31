import React from 'react'

export default class GuestHome extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{marginTop: '3vw', color: '#3c70c0'}}>WELCOME</h1>
        <h2 style={{color: '#3c70c0'}}>You must be hungry!</h2>
        <br />
        <br />
        <img src="tasty.jpg" />
      </div>
    )
  }
}
