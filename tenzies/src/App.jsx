import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'


export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())
 
  function generateAllNewDice(){
    let randomValues = []
    for (let i = 0; i < 10; i++){
      randomValues.push(Math.ceil(Math.random() * 6))
    }
    console.log(randomValues)
    return randomValues
  }
  
  const diceElements = dice.map(num => <Die value={num} />)
  
  return (
    <>
        <main>
          <div className="dice-container">
              {diceElements}
          </div>
        </main>
    </>
   
  )
}


