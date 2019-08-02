import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
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
      {isLoggedIn ? (
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
              <img src="../../public/search.png" style={{width: '3vw'}} />
              <input
                style={{
                  justifyContent: 'left',
                  width: '15vw',
                  height: '1.75vw',
                  marginTop: '0.5vw'
                }}
              />
            </div>
            <div>
              <a href="#" onClick={handleClick}>
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
                src="search.png"
                style={{margin: '0.5vw', width: '2vw', height: '2vw'}}
              />
              <input
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
)

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
    handleClick() {
      dispatch(logout())
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
