import Header from './Header.js'
import Instructions from './Instructions.js'
import Cards from './Cards.js'
import Card from './Card.js'
import fruitList from './fruitList.js'
import Score from './Score.js'
import { useState, useEffect } from 'react'

function App() {
  const [gameOn, setGameOn] = useState(false)
  
  const [fruitOrder, setFruitOrder] = useState(fruitList)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  
  let freshList = [...fruitList]
  let newGame = () => {setGameOn(true)}

  let displayFruits = () => {
    return (
      <div className='cards-grid-container'>
        {fruitOrder.map(fruit => {
          return (
            <Card key={fruit.id} name={fruit.name} id={fruit.id} shuffle={shuffleFruits} update={updateGame}/>
          )
        })}
      </div>
    )
  }

  let shuffleFruits = (arr) => {
    
    if (!arr[0].playing == true) return
    let fruits = arr
    
    let shuffledFruits = fruits
          .map((fruit) => ({ fruit, sort: Math.random()}))
          .sort((a, b) => a.sort - b.sort)
          .map(({ fruit}) => fruit)
    
    setFruitOrder(shuffledFruits)
    
  }

  let updateGame = (event) => {

    let fruits = [...fruitOrder]
    console.log(fruits)
    let newScore = score
    let newHighScore = highScore
    let newFruits = []
      for (let i = 0; i < fruits.length; i++) {
      
      let newFruit = {...fruits[i], playing: true}
      
      if (event.target.id == newFruit.id && newFruit.clicked == true) {
        newScore = 0
        newFruits = [...freshList]
        break
      }
      if (event.target.id == newFruit.id) {
        newFruit.clicked = true
        newScore += 1
        newHighScore = updateHighScore(newScore, newHighScore)
      }
      
      newFruits.push(newFruit)
    }
    setFruitOrder(newFruits)
    setScore(newScore)
    setHighScore(newHighScore)
    return newFruits
  }

  let updateHighScore = (score, highScore) => {
    if (score > highScore) {
      highScore = score
      return highScore
    } else {
      return highScore
    }
  }

  let newGameOrNah = () => {
    if (gameOn == true) {
      return (
        <div>
          {displayFruits()}
          <Score score={score} highScore={highScore}/>
        </div>
      )
    } else {
      return (
        <Instructions newGame={newGame} />
        
      )
    }
  }
  return (
    <div>
      <Header />
      {newGameOrNah()}
    </div>
    
  )
}

export default App