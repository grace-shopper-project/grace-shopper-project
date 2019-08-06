import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts, fetchFilteredProducts} from '../store/products.js'
import {fetchCategories} from '../store/categories.js'
import ProductCard from './ProductCard'
import {Button} from 'react-bootstrap'
import {capitalize} from '../../server/utils/helpers'

class AllProducts extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      page: 1
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  changeHandler(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleChange(evt) {
    evt.preventDefault()
    this.props.filteredProducts(evt.target.value, this.state.page)
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
    this.props.fetchCategories()
  }
  render() {
    return (
      <div>
        <div
          style={{
            margin: '1vw',
            width: '15vw',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <div
            style={{width: '15vw', marginTop: '0.50vw'}}
            className="dropdown"
            type="submit"
            onClick={this.handleSubmit}
          >
            <select
              style={{
                width: '15vw',
                backgroundColor: '#82bbb5'
              }}
              onChange={this.handleChange}
            >
              <option default>Filter By Category:</option>
              {this.props.categories.map((category, idx) => {
                return (
                  <option value={idx + 1} key={idx}>
                    {category.name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        {!this.props.products.length ? (
          <h1>LOADING......</h1>
        ) : (
          <div style={{width: '100vw'}}>
            <div className="deck">
              {this.props.products.map(product => {
                const {imageUrl, name, price} = product
                const properName = capitalize(name)

                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    imageUrl={imageUrl}
                    name={properName}
                    price={price}
                  />
                )
              })}
            </div>
          </div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '2vw'
          }}
        >
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
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    categories: state.categories
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: page => dispatch(fetchProducts(page)),
    fetchCategories: () => dispatch(fetchCategories()),

    filteredProducts: (categoryId, page) =>
      dispatch(fetchFilteredProducts(categoryId, page))
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
