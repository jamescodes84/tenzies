import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Die from './components/Die'


export default function App() {
  const [diceValues, setDiceValues] = React.useState([])
 
  function generateAllNewDice(){
    let randomValues = []
    for (let i = 0; i < 10; i++){
      randomValues.push(Math.ceil(Math.random() * 6))
    }
    setDiceValues(randomValues)
    console.log(diceValues)
  }
  generateAllNewDice()

  console.log("so it begins...")
  return (
    <>
        <main>
          <div className="dice-container">
              <Die value="1" /> 
              <Die value= "2" />
              <Die value="3"/>
              <Die value="4"/>
              <Die value="5" />
              <Die value="6" />
              <Die value="7" />
              <Die value="8" />
              <Die value="9" />
              <Die value="10" />
          </div>
        </main>
    </>
   
  )
}


