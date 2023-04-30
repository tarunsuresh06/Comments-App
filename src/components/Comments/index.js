import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onClickAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
    }))

    this.setState({
      name: '',
      comment: '',
    })
  }

  render() {
    const {commentList, name, comment} = this.state
    return (
      <div className="bg-container">
        <div className="comment-container">
          <h1 className="heading">Comments</h1>
          <div className="responsive-container">
            <form>
              <label className="comment-label" htmlFor="comment-name">
                Say something about 4.0 Technologies
              </label>
              <br />
              <input
                name="comment-name"
                className="comment-input"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
              />
              <br />
              <textarea
                name="comment-text"
                type="text"
                className="comment-input"
                rows="8"
                placeholder="Your Comment"
                value={comment}
                onChange={this.onChangeComment}
              />
              <br />
              <button
                type="submit"
                className="btn"
                onClick={this.onClickAddComment}
              >
                Add Comment
              </button>
            </form>

            <img
              className="comment-image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>

          <p className="comments-counter-heading">
            <span className="counter">0</span> Comments
          </p>

          <ul className="comment-list-container">
            {commentList.map(commentItem => (
              <CommentItem
                key={commentItem.id}
                commentDetails={commentItem}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
