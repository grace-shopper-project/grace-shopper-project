import React from 'react'
import {connect} from 'react-redux'
import {submitReview} from '../store/singleReview'

export class NewReview extends React.Component {
  constructor() {
    super()
    this.state = {
      rating: '',
      title: '',
      content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.submitReview({
      rating: event.target.rating.value,
      title: event.target.title.value,
      content: event.target.content.value
    })
    this.props.history.push('/account/orders')
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // componentDidMount() {
  //   return this.props.data()
  // }
  render() {
    return (
      <form id="new-review-form" onSubmit={this.handleSubmit}>
        <label htmlFor="new-review">
          {!this.state.rating ? (
            <span className="warning">"Rating is Required"</span>
          ) : (
            <div />
          )}
        </label>
        <input />
        <label htmlFor="new-review">
          {/* {!this.state.title ? (<span className="warning">
           "Title is Required"
         </span>) : (<div/>)} */}
        </label>
        <h3>Add a Headline</h3>
        <input
          className="form-control"
          type="text"
          name="rating"
          placeholder="What's most important?"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="new-review">
          {!this.state.content ? (
            <span className="warning">"Content is Required"</span>
          ) : (
            <div />
          )}
        </label>
        <h3>Write Your Review</h3>
        <input
          className="form-control"
          type="text"
          name="content"
          placeholder="What did you like or dislike?"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <span className="input-group-button">
          <button
            type="submit"
            disabled={
              !this.state.rating && !this.state.title && !this.state.content
            }
          >
            Submit Review!
          </button>
        </span>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  review: state.review,
  isLoggedIn: !!state.user.id
})

const mapDispatchToProps = dispatch => ({
  submitReview: review => dispatch(submitReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewReview)
