import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchReviewsForUsers} from '../store/userReviews'
import {fetchOrdersForUsers} from '../store/userOrders'
import {AllReviews} from './AllReviews'
import {Route, Switch, Link} from 'react-router-dom'
import history from '../history'
import SingleUserReview from './SingleUserReview'
import SingleUserOrder from './SingleUserOrder'
/**
 * COMPONENT
 */
class UserHome extends React.Component {
  componentDidMount() {
    console.log('PRRRROOOOPS', this.props)
    this.props.fetchReviewsForUsers()
    this.props.fetchOrdersForUsers()
  }
  render() {
    return (
      <div>
        <SingleUserReview reviewsForUser={this.props.reviewsForUser} />
        <SingleUserOrder ordersForUser={this.props.ordersForUser} />
      </div>
    )
  }
}
const mapDispatch = dispatch => {
  return {
    fetchReviewsForUsers: () => dispatch(fetchReviewsForUsers()),
    fetchOrdersForUsers: () => dispatch(fetchOrdersForUsers())
  }
}

const mapState = state => {
  return {
    reviewsForUser: state.reviewsForUser,
    ordersForUser: state.ordersForUser
  }
}

// export default

//   const {email, isLoggedIn, user} = props
//   console.log(props)
//   return (
//     <div>
//       <h3>Welcome, {email}</h3>
//       {/* <h5>User #: {user.id}</h5> */}
//       <button
//         type="button"
//         onClick={() => {
//           history.push(`/users/${user.id}/reviews`)
//         }}
//       >
//         Reviews
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           history.push(`/users/${user.id}/orders`)
//         }}
//       >
//         Orders
//       </button>
//       {isLoggedIn ? (
//         <div>
//           <Switch>
//             <Route
//               path="/myaccount/AllReviews/:productId"
//               component={AllReviews}
//             />
//           </Switch>
//         </div>
//       ) : (
//         <h3>Please login to view your account</h3>
//       )}
//     </div>
//   )
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     user: state.user,
//     email: state.user.email,
//     isLoggedIn: !!state.user.id
//   }
// }

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
