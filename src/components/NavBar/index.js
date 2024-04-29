// Write your code here.
import './index.css'

const NavBar = props => {
  const {navBarIs} = props
  return (
    <div className="navBar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji-logo"
        />
        <h1 className="main-heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score-para">Score : 0</p>
        <p className="score-para">Top Score : 0</p>
      </div>
    </div>
  )
}

export default NavBar
