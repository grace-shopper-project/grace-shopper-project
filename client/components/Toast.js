import React, {Component} from 'react'
import {toast} from 'react-toastify'

export default class Toasty extends Component {
  // constructor() {
  //   super()
  //   // this.toastId = null
  // }

  notify() {
    console.log('hello')
    console.log('toast', toast('Hello', {autoClose: false}))
    toast('Hello', {autoClose: 5000})
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.notify()}>
          Notify
        </button>
      </div>
    )
  }
}
