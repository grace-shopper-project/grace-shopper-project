import React from 'react'
import {connect} from 'react-redux'
import {submitReviews} from '../store/allReviews'

import axios from 'axios'

export class NewReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // productId: '',
      rating: '',
      title: '',
      content: ''
    }
    console.log('pdpffpgofpgo', this.props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  // async componentDidMount() {
  //   await this.props.submitReview()
  // }

  // componentDidMount() {
  //   console.log('DATA', this.props)
  //   if (this.props.data) return this.props.data()
  //   // console.log(this.props)
  // }

  handleSubmit(event) {
    console.log('WHAT', this.props)
    event.preventDefault()
    console.log('submitting the form')
    // let id = this.props.match.params.productId
    // console.log(id)
    // this.props.history.push(`/products/${id}/reviews`)
    let id = Number(this.state.productId)
    console.log(id)
    this.props.submitReviews({
      productId: event.target.productId.value,
      userId: event.target.userId.value,
      rating: event.target.rating.value,
      title: event.target.title.value,
      content: event.target.content.value
    })
    this.props.history.push(`/products/${id}`)

    // axios.post(
    //   `/api/products/${this.props.match.params.productId}/reviews`,
    //   this.state
    // )

    // this.props.history.push(
    //   `/products/${this.props.match.params.productId}/reviews`
    // )
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    if (this.props.data) return this.props.data()
  }
  render() {
    return (
      //rating
      <form id="new-review-form" onSubmit={this.handleSubmit}>
        <label htmlFor="new-review">
          {!this.state.productId ? (
            <span className="warning">"Product Number is Required"</span>
          ) : (
            <div />
          )}
        </label>
        <h3>Product Number</h3>
        <input
          className="form-control"
          type="number"
          name="productId"
          value={this.state.productId}
          onChange={this.handleChange}
        />
        <label htmlFor="new-review">
          {!this.state.userId ? (
            <span className="warning">"User Id is Required"</span>
          ) : (
            <div />
          )}
        </label>
        <h3>User Id</h3>
        <input
          className="form-control"
          type="number"
          name="userId"
          value={this.state.userId}
          onChange={this.handleChange}
        />
        <label htmlFor="new-review">
          {!this.state.rating ? (
            <span className="warning">"Rating is Required"</span>
          ) : (
            <div />
          )}
        </label>
        <h3>What Would You Rate It?</h3>
        <input
          className="form-control"
          type="text"
          name="rating"
          value={this.state.review}
          onChange={this.handleChange}
        />
        {/* title */}

        <label htmlFor="new-review">
          {!this.state.title ? (
            <span className="warning">"Title is Required"</span>
          ) : (
            <div />
          )}
        </label>
        <h3>Add a Headline</h3>
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="What's most important?"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="new-review">
          {/* {!this.state.content ? (
            <span className="warning">"Content is Required"</span>
          ) : (
            <div />
          )} */}
        </label>
        <h3>Write Your Review</h3>
        <input
          className="form-control"
          type="text"
          name="content"
          placeholder="What did you like or dislike?"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <span className="input-group-button">
          <button
            type="submit"
            disabled={
              !this.state.productId ||
              !this.state.userId ||
              !this.state.rating ||
              !this.state.title ||
              !this.state.content
            }
          >
            Submit Review!
          </button>
        </span>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('STATE', state.singleProduct)
  return {
    singleProduct: state.singleProduct,
    singleUser: state.singleUser
    // isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  // fetchReview: () => dispatch(fetchReviews()),
  return {
    submitReviews: review => dispatch(submitReviews(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReview)
