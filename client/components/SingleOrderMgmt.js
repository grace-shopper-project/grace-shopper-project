import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrder} from '../store/singleOrderMgmt'

class SingleOrderMgmt extends React.Component {
  async componentDidMount() {
    const orderId = Number(this.props.match.params.orderId)
    console.log('orderId: ', orderId)
    await this.props.fetchSingleOrder(orderId)
  }
  render() {
    return (
      <>
        <h3>{this.props.order.status}</h3>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.singleOrderForAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleOrder: orderId => {
      dispatch(fetchSingleOrder(orderId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrderMgmt)
