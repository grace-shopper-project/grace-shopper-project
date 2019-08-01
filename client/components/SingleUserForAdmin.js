import React from 'react'
import {fetSingleUserForAdmin} from '../store/usersForAdmin'
import {connect} from 'react-redux'

class SingleUserForAdmin extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.id
    this.props.fetchSingleUser(userId)
  }
}

const mapStateToProps = state => {
  return {
    singleUser: state.SingleUserForAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleUser: userId => {
      return dispatch(fetSingleUserForAdmin(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserForAdmin)
