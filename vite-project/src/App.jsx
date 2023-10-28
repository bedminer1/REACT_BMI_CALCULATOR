import React from 'react'
import { useState, useMemo } from 'react'
import './styles/styles.css'

const DEFAULT_WEIGHT = 50
const DEFAULT_HEIGHT = 150

function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT)
  const [weight, setWeight] = useState(DEFAULT_WEIGHT)


  const BMIoutput = useMemo(() => {
    const calculatedHeight = height / 100
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height])

  

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <label htmlFor="height">
        Height: <input type="number" onChange={(e) => setHeight(e.target.value)}></input>
        </label>
      </div>
      <div>
        <label htmlFor="weight">
        Weight: <input type="number" onChange={(e) => setWeight(e.target.value)}></input>
        </label>
      </div>
      <div>
        your BMI is {BMIoutput}
      </div>


    </div>
  )
}

export default App
