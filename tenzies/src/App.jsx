import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'
//import nanoid from './node_modules/nanoid'
import {nanoid } from 'nanoid'
export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())
  
  function generateAllNewDice(){
    let randomValues = []
    for (let i = 0; i < 10; i++){
      randomValues.push({ value: Math.ceil(Math.random() * 6), isHeld: false , id: nanoid()})
    }
    console.log(randomValues)
    return randomValues
  }

  let diceElements = dice.map(num => <Die value={num.value}  id={num.id} key={num.id} isHeld={num.isHeld} />)
  function rollDice(){
     setDice(generateAllNewDice())
  }
  
  

  return (
    <>
        <main>
          <div className="dice-container">
              {diceElements}
          </div>
          <button onClick={rollDice} className="roll-dice">Roll Dice</button>
        </main>
    </>
   
  )
}


