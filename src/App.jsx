
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Cart from './components/cart'
import UserProfile from './components/UserProfile'
import Values from './pages/Values'
import WishList from './components/WishList'


const App = () => {
   
  return (
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/values" element={<Values />}  />
          <Route path="/cart" element={<Cart />}  />
          <Route path="/userProfile" element={<UserProfile />}  />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/WishList" element={<WishList />} />
        </Routes>
      </div>          
    
  )
}

export default App