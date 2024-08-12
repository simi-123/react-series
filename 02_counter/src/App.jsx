import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter , setCounter] = useState(5)
  // let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log(counter);
  };
  
  const removeValue = () =>{
    if (counter >=1) {
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1> hello world</h1>
      <h2>Counter value</h2>
      <button onClick={addValue} >Add Value</button>
      <br /><br />
      <button onClick={removeValue} >Remove Value {removeValue}</button>
      <p>value : {counter}</p>
    </>
  )
}

export default App
