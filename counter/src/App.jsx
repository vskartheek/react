import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount]=useState(0)

  const addValue=()=>{
    setCount((count)=>count+1)
  }

  const removeValue=()=>{
    setCount((count)=>count-1)
  }


  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {count}</h2>
     <button
      onClick={addValue}
     >Add Value</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove Value</button>
     </>
  )
}

export default App
