import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'
//import nanoid from './node_modules/nanoid'
import {nanoid } from 'nanoid'
export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())
  
  function generateAllNewDice(){
    return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
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
  
  let diceElements = dice.map(num => <Die holdFunc={hold} value={num.value}  id={num.id} key={num.id} isHeld={num.isHeld} />)

  return (
    <>
        <main>
          <div className="dice-container">
              {diceElements}
          </div>
          <button onClick={rollDice} className="roll-dice" >Roll Dice</button>
        </main>
    </>
   
  )
}


