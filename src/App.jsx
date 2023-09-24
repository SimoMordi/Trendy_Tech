import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const Counter = () => setCount(count - 1)
     
  

  return (
    <div>
      <button className='counter' onClick={Counter}>Days left {count}</button>
     </div>
      
    
  )
}

export default App
