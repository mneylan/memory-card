const Instructions = (props) => {
  const {newGame} = props
  
  return (
    <div className="instructions-outer-container">
      <div className="instructions-inner-container">
        <div className="instructions-title-container">
          <h2 className="instructions-title">Instructions</h2>
        </div>
        <div className="instructions-body-container" onClick={() => newGame()}>
          <p className="instructions-body">This game will test your ability to remember what cards you clicked.</p><p className="instructions-body">12 pictures of fruit lay before your eyes. Try to click each one in a row without clicking the same fruit twice. For every correct click you will receive 1 point and the high score is 12.</p> <p className="instructions-body">Click here to begin and good luck!</p>
        </div>
      </div>
    </div>
  )
}

export default Instructions