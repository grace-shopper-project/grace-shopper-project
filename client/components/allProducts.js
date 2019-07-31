import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/allProducts.js'
import ProductCard from './ProductCard'
import {Dropdown, DropdownButton, Button} from 'react-bootstrap'

class AllProducts extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      page: 1
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  changeHandler(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  clickHandler(event) {
    let current = this.state.page
    if (event.target.name === 'next') {
      this.setState({page: current + 1})
      this.props.fetchProducts(this.state.page + 1)
    } else {
      this.setState({page: current - 1})
      this.props.fetchProducts(this.state.page - 1)
    }
  }
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
        {this.state.page > 1 && (
          <Button name="prev" onClick={this.clickHandler}>
            Prev
          </Button>
        )}
        {this.state.page < Math.ceil(1000 / 50) && (
          <Button name="next" onClick={this.clickHandler}>
            Next
          </Button>
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
    fetchProducts: page => dispatch(fetchProducts(page))
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
