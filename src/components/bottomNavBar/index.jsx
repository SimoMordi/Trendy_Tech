import { Link } from "react-router-dom";
import './index.css'


const BottomNavBar = () => {


    return ( 
      <nav id='bottomNavBar'>
          <Link to="/">Home</Link>
          <Link to="/values">Values</Link>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">Wish List💟</Link>
          <Link to="/cart">🛒Cart</Link>
          <Link to="/userProfile">💻</Link>
      </nav>
    )
  }
  
  export default BottomNavBar
