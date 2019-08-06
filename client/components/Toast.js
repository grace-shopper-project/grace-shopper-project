import React, {Component} from 'react'

export default class Toasty extends Component {
  render() {
    return (
      <div
        className="popup"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          border: '3px dashed black',
          width: '14vw',
          height: '3vw',
          fontSize: '1.25vw'
        }}
      >
        <div
          style={{
            width: '10vw',
            height: '3vw',
            alignContent: 'center',
            padding: '0.25vw'
          }}
        >
          <p>Added to cart!</p>
        </div>
        <div
          style={{
            backgroundColor: '#ed6a5a',
            width: '2vw',
            height: '3vh'
          }}
        >
          <p style={{marginBlock: '0vw'}}>x</p>
        </div>
      </div>
    )
  }
}
