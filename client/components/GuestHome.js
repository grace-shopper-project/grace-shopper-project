import React from 'react'

export default class GuestHome extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1
          style={{
            fontFamily: 'Corben, cursive',
            marginTop: '3vw',
            marginBotton: '0vw',
            paddingBottom: '0vw',
            color: '#3c70c0'
          }}
        >
          WELCOME
        </h1>
        <h2 style={{fontFamily: 'Corben, cursive', color: '#3c70c0'}}>
          You must be hungry!
        </h2>
        <br />
        <br />
        <img src="/tasty.jpg" />
      </div>
    )
  }
}
