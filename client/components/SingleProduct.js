import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'

export class SingleProduct extends React.Component {
  render() {
    return (
      <div>
        <h1>Single Product</h1>
        <div />
      </div>
    )
  }
}

const mapState = state => ({
  singleProduct: state.singleProduct
})

const mapDispatch = dispatch => {
  return {fetchSingleProduct: () => dispatch(fetchSingleProduct())}
}

export default connect(mapState, mapDispatch)(SingleProduct)
