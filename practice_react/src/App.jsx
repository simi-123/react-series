// import React from 'react'
// import Product from './Product';
// function App() {
//   return (
//     <div className='main'>
//       <h1>App</h1>
    
//     <Product />
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import Product from './Product';

function App() {
  var [a,b]= useState(69);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white' > 
    <h1>{a}</h1>
    <button onClick={()=>b(a+1)}className='bg-green-500 rounded-md px-3'>click</button>

     <Product  a = "hello" />
     </div>
  )
}

export default App
