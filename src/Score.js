const Score = (props) => {
  const {score, highScore} = props
  if (score == 12) {
  return (
    <div className="score-outer-container">
      <div className="score-inner-container-larger">
        <div className="score">
          <span>Score:</span>
          <span className="score-number">{score}</span>
        </div>
        <div className="highscore">
          <span>High Score:</span>
          <span className="score-number">{highScore}</span>
        </div>
        <div className="winner-container">
          <span>You Won!</span>
          <span className="new-game">Click a fruit to restart!</span>
        </div>
        
      </div>
    </div>
  )
} else {
  return (
    <div className="score-outer-container">
      <div className="score-inner-container">
        <div className="score">
          <span>Score:</span>
          <span className="score-number">{score}</span>
        </div>
        <div className="highscore">
          <span>High Score:</span>
          <span className="score-number">{highScore}</span>
        </div>
        
      </div>
    </div>
  )
}

}
export default Score