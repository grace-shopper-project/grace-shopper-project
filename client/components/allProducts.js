import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/allProducts.js'
import ProductCard from './ProductCard'
import {Dropdown, DropdownButton} from 'react-bootstrap'

class AllProducts extends Component {
  // constructor() {
  //   super()
  // }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        <div
          style={{
            width: '42vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <DropdownButton
              id="dropdown-item-button"
              title="Filter by Category:"
            >
              <Dropdown.Item as="button" style={{width: '20vw'}}>
                Action
              </Dropdown.Item>
              <Dropdown.Item as="button" style={{width: '20vw'}}>
                Another action
              </Dropdown.Item>
              <Dropdown.Item as="button" style={{width: '20vw'}}>
                Something else
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <DropdownButton id="dropdown-item-button" title="Sort by:">
              <Dropdown.Item as="button" style={{width: '20vw'}}>
                Action
              </Dropdown.Item>
              <Dropdown.Item as="button" style={{width: '20vw'}}>
                Another action
              </Dropdown.Item>
              <Dropdown.Item as="button" style={{width: '20vw'}}>
                Something else
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        {!this.props.products.length ? (
          <h1>LOADING......</h1>
        ) : (
          <div style={{width: '100vw'}}>
            <div className="deck">
              {this.props.products.map(product => {
                const {imageUrl, name} = product
                return (
                  <ProductCard
                    key={product.id}
                    imageUrl={imageUrl}
                    name={name}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
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
