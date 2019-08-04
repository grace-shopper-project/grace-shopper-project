import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {fetchSearchedProducts} from '../store/products'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      inputEntry: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this)
  }

  handleOnChange(event) {
    this.setState({inputEntry: event.target.value})
  }

  async handleOnKeyPress(event) {
    if (event.key === 'Enter') {
      await this.props.fetchSearchedProducts(this.state.inputEntry)
    }
  }

  render() {
    return (
      <>
        <div className="navHeader">
          <div className="bread" style={{height: '18vh'}}>
            <h1
              style={{
                textAlign: 'center',
                fontFamily: 'Corben, cursive',
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
            </h1>
          </div>
          <nav>
            {this.props.isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <div style={{width: '25%'}} />
                <div>
                  <div style={{width: '50%'}}>
                    <Link to="/home">Home</Link>
                  </div>
                  <div>
                    <Link to="/products">Products</Link>
                  </div>
                  <div>
                    <img src="/search.png" style={{width: '3vw'}} />
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
                    <Link to="/home">Home</Link>
                  </div>
                  <div>
                    <Link to="/products">Products</Link>
                  </div>
                  <div>
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
                    <Link to="/cart">Your Cart</Link>
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
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick: () => {
      dispatch(logout())
    },
    fetchSearchedProducts: searchParam => {
      dispatch(fetchSearchedProducts(searchParam))
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
