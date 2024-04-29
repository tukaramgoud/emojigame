// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {cardDetails, buttonClicked} = props

  const {emojiName, emojiUrl, id} = cardDetails
  const imageClicked = () => {
    buttonClicked(id)
  }
  return (
    <li className="card-container">
      <button type="button" onClick={imageClicked}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
