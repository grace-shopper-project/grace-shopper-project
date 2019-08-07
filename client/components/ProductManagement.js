import React from 'react'
import ProductManagementCard from './ProductManagementCard'
import {fetchProducts} from '../store/products'
import {connect} from 'react-redux'

class ProductManagement extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <>
        {!this.props.products.length ? (
          <h1>LOADING......</h1>
        ) : (
          <div>
            <div className="deck">
              {this.props.products.map(product => {
                const {imageUrl, name} = product
                return (
                  <ProductManagementCard
                    key={product.id}
                    id={product.id}
                    imageUrl={imageUrl}
                    name={name}
                  />
                )
              })}
            </div>
          </div>
        )}
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts())
    }
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductManagement)
