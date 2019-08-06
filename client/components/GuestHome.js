import React from 'react'
import Toasty from './Toast'

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
        />
        <h2 style={{fontFamily: 'Corben, cursive', color: '#3c70c0'}}>
          Well, hello there! <br />
          You must be hungry!
        </h2>
        <br />
        <div>
          <Toasty />
        </div>
        <br />
        <img src="/tasty.jpg" style={{marginBottom: '2vw'}} />
      </div>
    )
  }
}
