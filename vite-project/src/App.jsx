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
    <div className='main'>
      <h1>BMI Calculator</h1>
      <div>
        <label htmlFor="height">
        Height: <input type="numeric" className='height-input' onChange={(e) => setHeight(e.target.value)}></input>
        </label>
      </div>
      <div>
        <label htmlFor="weight">
        Weight: <input type="numeric" className='weight-input' onChange={(e) => setWeight(e.target.value)}></input>
        </label>
      </div>
      <div>
        your BMI is
      </div>
      <div className='bmi-container'>{BMIoutput}</div>


    </div>
  )
}

export default App
