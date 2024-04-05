import { useState } from 'react'
import './App.css'
import  Store   from './component/Store'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <Store/>
  </div>
)
}

export default App
