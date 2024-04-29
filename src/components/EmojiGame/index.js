/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {list: []}

  shuffleList = () => {
    const newList = this.resortTheList()
    this.setState({list: newList})
  }

  resortTheList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const newList = this.resortTheList()

    return (
      <div className="app-container">
        <NavBar />
        <div className="emoji-game">
          {newList.map(eachOne => (
            <EmojiCard
              cardDetails={eachOne}
              buttonClicked={this.shuffleList}
              key={eachOne.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default EmojiGame
