import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  AllProducts,
  Admin,
  GuestHome,
  SingleProduct,
  AllReviews,
  NewReview,
  SingleUser,
  Cart,
  CartInfo
} from './components'
import {me} from './store'
import {fetchCart} from './store/cart'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.fetchCart()
  }

  render() {
    const {isLoggedIn} = this.props
    // const {isAdmin} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProducts} />
        <Route path="/reviews/new" component={NewReview} />
        <Route exact path="/reviews" component={AllReviews} />
        <Route path="/cart" component={Cart} />
        <Route path="/cart/info" component={CartInfo} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route
              exact
              path="/users"
              component={UserHome}
              onDelete={this.deleteReviews}
            />
            <Route path="/users/:id" component={SingleUser} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/products" component={AllProducts} />
            <Route exact path="/reviews" component={AllReviews} />
            <Route path="/reviews/new" component={NewReview} />
            <Route path="/cart" component={Cart} />
            {/* { isAdmin && (
                <Switch>
                  <Route path="/admin" component={Admin} />
                </Switch>
              )} */}
            <Route component={UserHome} />
          </Switch>
        )}
        <Route component={GuestHome} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    fetchCart() {
      dispatch(fetchCart())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
