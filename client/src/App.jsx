import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-sm bg-gray-950 text-purple-500">Hola mundo gente del front</h1>
    </div>
  )
}

export default App
