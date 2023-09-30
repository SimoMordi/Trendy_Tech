import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Home from './pages/Home'
import About from './pages/About'
import ProductPage from './pages/ProductPage'
import BottomNavBar from './components/bottomNavBar'
import Header from './components/Header'


const App = () => {
  const [count, setCount] = useState(0)
  const Counter = () => setCount(count - 1)
  const showCount = useSelector((store) => store.counter)
     
  

  return (
   
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}  />
        <Route path="/products" element={<ProductPage />} />
     </Routes>
    
      {showCount}
      <button className='counter' onClick={Counter}>Days left {count}</button>
     
      
     </div>
    
      
    
  )
}

export default App