import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div>
        <Navbar></Navbar>
        <h1 className='text-green-400	'>Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  )
}

export default App
