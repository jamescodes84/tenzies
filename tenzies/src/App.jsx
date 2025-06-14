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
                isHeld: true,
                id: nanoid()
            }))
  }

  
  function rollDice(){
     setDice(generateAllNewDice())
  }

  function hold(buttonID) {
    
    //need to map over dice elements and if the dice element id equals buttonID, change held status
   // dice.map(dice => dice.id)

   // brute force for loop method
   
      //set button id
/*setDice(dice.map(die => {
        if (die.id == buttonID){
          die.isHeld = !die.isHeld
        }
      }))*/
   
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


