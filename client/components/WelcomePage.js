import React from 'react'
import {connect} from 'react-redux'


const WelcomePage = props =>(
    <div>
      <h3 style={{textAlign: 'center'}}>Welcome, {props.user.email}</h3>
    </div>
  )


const mapState = state =>{
  return{
    user: state.user
  }
}

export default connect(mapState)(WelcomePage)
