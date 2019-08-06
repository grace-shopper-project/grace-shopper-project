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
          fontSize: '1.5vw'
        }}
      >
        <div
          style={{
            alignContent: 'center',
            paddingLeft: '2vw',
            paddingTop: '0.5vw'
          }}
        >
          <p>Added to cart!</p>
        </div>
      </div>
    )
  }
}
