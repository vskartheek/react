import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  const changeColor = (color) => () => {
    setColor(color)
  }
  return (
    <div className='w-screen h-screen  duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "red"}} onClick={changeColor("red")}
          >red</button>
          <button className='outline-none px-4 text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "yellow"}} onClick={changeColor("yellow")}
          >yellow</button>
          <button className='outline-none px-4 text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "green"}} onClick={changeColor("green")}
          >green</button>
          <button className='outline-none px-4 text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "blue"}} onClick={changeColor("blue")}
          >blue</button>
          <button className='outline-none px-4 text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "pink"}} onClick={changeColor("pink")}
          >pink</button>
          <button className='outline-none px-4 text-white px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "violet"}} onClick={changeColor("violet")}
          >violet</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
