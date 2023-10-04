
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './components/cart'
import UserProfile from './components/UserProfile'
import Values from './pages/Values'
import WishList from './components/WishList'
import BottomNavBar from './components/bottomNavBar'
import Header from './components/Header'
import ProductPage from './pages/ProductDisplay'


const App = () => {
   
  return (
      <div id='App'>
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/values" element={<Values />}  />
          <Route path="/cart" element={<Cart />}  />
          <Route path="/userProfile" element={<UserProfile />}  />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/WishList" element={<WishList />} />
        </Routes>
        <BottomNavBar />
        
      </div>          
    
  )
}

export default App