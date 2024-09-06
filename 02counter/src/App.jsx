import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  

  const addValue =() =>{
    
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter) 
    }else{
      console.log("Value Exceed 20")
    }
    
  }
  const subValue = () =>{
    if (counter > 0){
      counter = counter - 1 
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Coffee with bishwas</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={subValue}>Remove Value</button>
    </>
  )
}

export default App
