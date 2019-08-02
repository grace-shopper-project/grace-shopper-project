import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products.js'
import ProductCard from './ProductCard'
import {Button} from 'react-bootstrap'

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
    const options = ['option1', 'option2', 'option3']
    const filters = ['filter1', 'filter2', 'filter3']
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '1vw',
            verticalAlign: 'center'
          }}
        >
          <div
            style={{
              margin: '1vw',
              width: '15vw',
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <div
              style={{width: '15vw', marginTop: '0.25vw'}}
              className="dropdown"
              type="submit"
              onClick={this.handleSubmit}
            >
              <select
                style={{width: '15vw', backgroundColor: '#82bbb5'}}
                onChange={this.handleChange}
              >
                {options.map(function(num) {
                  return <option key={options.indexOf(num)}>{num}</option>
                })}
              </select>
            </div>
          </div>
          <div>
            <div
              style={{
                width: '15vw',
                display: 'flex',
                flexDirection: 'row',
                padding: '1vw',
                verticalAlign: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div
                style={{
                  width: '15vw',
                  marginTop: '0.25vw'
                }}
                className="dropdown"
                type="submit"
                onClick={this.handleSubmit}
              >
                <select
                  style={{width: '20vw', backgroundColor: '#82bbb5'}}
                  onChange={this.handleChange}
                >
                  {filters.map(function(filter) {
                    return (
                      <option key={filters.indexOf(filter)}>{filter}</option>
                    )
                  })}
                </select>
              </div>
            </div>
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
                    id={product.id}
                    imageUrl={imageUrl}
                    name={name}
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
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: page => dispatch(fetchProducts(page))
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
