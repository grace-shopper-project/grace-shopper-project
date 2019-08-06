import React from 'react'
import Toasty from './Toast'

export default class GuestHome extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1
          className="corb"
          style={{
            marginTop: '3vw',
            marginBotton: '0vw',
            paddingBottom: '0vw',
            color: '#3c70c0'
          }}
        />
        <h2 className="corb" style={{color: '#3c70c0'}}>
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
