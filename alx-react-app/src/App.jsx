import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Vite + React</h1>
      <h2>Hello ALX!</h2>
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </div>
  )
}

export default App
