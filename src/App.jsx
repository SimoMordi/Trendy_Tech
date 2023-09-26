import { useState } from 'react'
import './App.css'
import About from './components/About'

import Sidebar from './components/Sidebar'
import Product from './components/Products'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'



const App = () => {
  const [count, setCount] = useState(0)
  const Counter = () => setCount(count - 1)
     
  

  return (
   
    <div>
      <button className='counter' onClick={Counter}>Days left {count}</button>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}  />
        <Route path="/products" element={<Product />} />
     </Routes>
      
     </div>
    
      
    
  )
}

export default App
