import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
   let myobj={
     Name:"somi",
     age:23,
     uid: 3456,
     address:"ajdjdnsjkfn"
   }

   let newArray =[1,1,1,11]
  return (
    <>
      <h1 className='bg-green-400 text-black'>Tailwind test</h1>
       <Card  username = 'sim'/>
       <Card  btnText='click me'/>


   
    </>
  )
}

export default App
