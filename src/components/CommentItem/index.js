// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props

  const {name, comment, isLiked} = commentDetails

  const initial = name.slice(0, 1)

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedClass = isLiked ? 'Liked' : 'Like'

  return (
    <li className="comment-box">
      <div className="comment-responsive-container">
        <div>
          <h1 className="initial">{initial}</h1>
        </div>
        <div>
          <h1 className="comment-name">{name}</h1>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-container">
        <div>
          <span className={`like-text ${likedClass}`}>
            <img className="like-img" src={likeImage} alt="like" /> {likedClass}
          </span>
        </div>
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </div>
    </li>
  )
}

export default CommentItem
