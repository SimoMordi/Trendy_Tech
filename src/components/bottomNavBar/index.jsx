import { Link } from "react-router-dom";
import './index.css'


const BottomNavBar = () => {


    return ( 
      <nav id='bottomNavBar'>
          <Link to="/">Home</Link>
          <Link to="/about">Values</Link>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">❤</Link>
          <Link to="/cart">🛒</Link>
          <Link to="/userProfile">⛄</Link>
      </nav>
    )
  }
  
  export default BottomNavBar
