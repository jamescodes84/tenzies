import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'
//import nanoid from './node_modules/nanoid'
import {nanoid } from 'nanoid'
import ReactConfetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())
  let gameWon = gameOver()

  if (gameWon){
    console.log("game is over")
  }else{
    console.log("game is not over")
  }

  function generateAllNewDice(){
    return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
  }

  function gameOver() {
    // check to see how many dice
    // have been held
    let finishedDiceCount = 0
    let tenDiceHeld = false
    let tenDiceSame = false
    let heldValue = null
    //count how many dice are held
    dice.map(die => {
      if (die.isHeld)
        finishedDiceCount++
        heldValue = die.value
    })
    // if ten are held, ensure the values all match
    if (finishedDiceCount == 10){
      let tenDiceHeld = true
      let matchingDice = 0

     // console.log("ten dice held")
      dice.map(die => {
        if (die.value === heldValue){
          matchingDice++
        }
      })

      if (matchingDice === 10){
        tenDiceSame = true
        //console.log("ten dice match")
      }

      if (tenDiceHeld && tenDiceSame){
        return true
      }

    } else {
      return false
    }

    /**********************
     * Bob's Logic from the course is below:
     * 
     * 
     * if (
        dice.every(die => die.isHeld) && 
        dice.every(die => die.value === dice[0].value)
    ) {
        console.log("Game won!")
    }
     
     *************************/


  } 
  
  
  
  function rollDice(){
     setDice(prevDice => prevDice.map(die => {
      if (die.isHeld === true){
        return die
      } else {
        return {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }
      }
    }))
    //gameWon()
  }

  function hold(buttonID) {
        
    // **** CRITICAL PIECE OF CODE ******
    // For each die in the old dice state,
    // check to see if the id matches the id of the button clicked,
    // if it does, change its isHeld value and update state,
    // otherwise, update state with old value of die   
    setDice(prevDice => prevDice.map(die => {
      if (die.id === buttonID){
        return {...die, isHeld: !die.isHeld}
      } else {
        return die
      }
    }))
   
  }

  function resetGame(){
    setDice(generateAllNewDice())
  }
  
  let diceElements = dice.map(num => <Die holdFunc={hold} value={num.value}  id={num.id} key={num.id} isHeld={num.isHeld} />)
 



  return (
    <>
        <main>
          {gameWon && <ReactConfetti />}
          
          {gameWon ? <h1>Game Over</h1>:<h1 className="title">Tenzies</h1>}
            {gameWon ?<p></p> :<p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>}
          <div className="dice-container">
              {diceElements}
          </div>
          {!gameWon && <button onClick={rollDice} className="roll-dice" >Roll Dice</button>}
          {gameWon && <button onClick={resetGame} className="roll-dice" >New Game</button>}
        </main>
    </>
   
  )
}


