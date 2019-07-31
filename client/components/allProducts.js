import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/allProducts.js'
import ProductCard from './ProductCard'

class AllProducts extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.fetchProducts()
  }

  render() {
    if (!this.props.products.length) {
      return <h1>LOADING......</h1>
    } else
      return (
        <Fragment>
          {this.props.products.map(product => {
            const {imageUrl, name} = product
            return <ProductCard imageUrl={imageUrl} name={name} />
          })}
        </Fragment>
      )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
