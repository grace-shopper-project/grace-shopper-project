import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout} from '../store'
import {fetchSearchedProducts, fetchProducts} from '../store/products'
import {fetchCart} from '../store/cart'
import Toasty from './Toast'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      inputEntry: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this)
    this.handleProductOnClick = this.handleProductOnClick.bind(this)
  }

  handleOnChange(event) {
    this.setState({inputEntry: event.target.value})
  }

  async handleOnKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      await this.props.history.push('/products')
      this.props.fetchSearchedProducts(this.state.inputEntry)
    }
  }

  async handleProductOnClick() {
    await this.setState({inputEntry: ''})
    this.props.fetchProducts()
  }

  render() {
    return (
      <>
        <div>
          <div className="bread" style={{height: '18vh'}}>
            <h1
              className="corb"
              style={{
                textAlign: 'center',
                fontSize: '3.5vw',
                color: 'black',
                fontWeight: 'underline',
                // padding: '1vw',
                margin: '1vw',
                marginTop: '0vw',
                marginBottom: '3vw'
              }}
            >
              let's get this bread!
              <div style={{justifyContent: 'center'}}>
                {this.props.toast === 'show' && <Toasty />}
              </div>
            </h1>
          </div>
          <nav>
            {this.props.isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <div style={{width: '30%'}} />
                <div style={{width: '40%'}}>
                  <div>
                    <Link
                      to="/home"
                      onClick={() => this.setState({inputEntry: ''})}
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link to="/products" onClick={this.handleProductOnClick}>
                      Products
                    </Link>
                  </div>
                  <div style={{padding: '0.5vw'}}>
                    <img
                      src="/search.png"
                      style={{margin: '0.5vw', width: '2vw', height: '2vw'}}
                    />
                    <input
                      type="text"
                      name="inputEntry"
                      value={this.state.inputEntry}
                      onChange={this.handleOnChange}
                      onKeyPress={this.handleOnKeyPress}
                      style={{
                        justifyContent: 'left',
                        width: '15vw',
                        height: '1.75vw',
                        marginTop: '0.5vw'
                      }}
                    />
                  </div>
                </div>
                <div style={{width: '30%'}}>
                  <div>
                    <Link to={`/users/${this.props.userId}`}>Your Account</Link>
                  </div>
                  <div>
                    <Link onClick={this.props.fetchCart} to="/cart">
                      Your Cart
                    </Link>
                  </div>
                  <div>
                    <a href="#" onClick={this.props.handleClick}>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div style={{width: '30%'}} />
                {/* The navbar will show these links before you log in */}
                <div style={{width: '40%', justifyContent: 'center'}}>
                  <div>
                    <Link
                      to="/home"
                      onClick={() => this.setState({inputEntry: ''})}
                    >
                      Home
                    </Link>
                  </div>
                  <div onClick={this.handleProductOnClick}>
                    <Link to="/products">Products</Link>
                  </div>
                  <div style={{padding: '0.5vw'}}>
                    <img
                      src="/search.png"
                      style={{margin: '0.5vw', width: '2vw', height: '2vw'}}
                    />
                    <input
                      type="text"
                      name="inputEntry"
                      value={this.state.inputEntry}
                      onChange={this.handleOnChange}
                      onKeyPress={this.handleOnKeyPress}
                      style={{
                        justifyContent: 'left',
                        width: '15vw',
                        height: '1.75vw',
                        marginTop: '0.5vw',
                        fontSize: '1vw'
                      }}
                    />
                  </div>
                </div>
                <div style={{width: '30%', justifyContent: 'flex-end'}}>
                  <div>
                    <Link to="/login">Login</Link>
                  </div>
                  <div>
                    <Link to="/signup">Sign Up</Link>
                  </div>
                  <div style={{marginRight: '1.5vw'}}>
                    <Link onClick={this.props.fetchCart} to="/cart">
                      Your Cart
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </>
    )
  } //end of render method
} //for end of component

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
    toast: state.toast
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick: () => {
      dispatch(logout())
    },
    fetchSearchedProducts: searchParam => {
      dispatch(fetchSearchedProducts(searchParam))
    },
    fetchProducts: () => {
      dispatch(fetchProducts())
    },
    fetchCart: () => dispatch(fetchCart())
  }
}

export default withRouter(connect(mapState, mapDispatch)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
