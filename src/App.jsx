
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import UserProfile from './components/UserProfile'
import WishList from './components/WishList'
import BottomNavBar from './components/bottomNavBar'
import ProductPage from './pages/ProductDisplay'
import Header from './components/HeaderBar/Header'
import SearchBar from './components/HeaderBar/SearchBar'
import About from './pages/about'
import Cart from './components/cart'





const App = () => {
  
  return (
      <div id='App'>
        
        <Header />
        <SearchBar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}  />
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