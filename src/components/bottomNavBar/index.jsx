import { Link } from "react-router-dom";
import './index.css'


const BottomNavBar = () => {


    return ( 
      <nav id='bottomNavBar'>
          <Link to="/">Home</Link>
          <Link to="/about"> About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">Wish List</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/userProfile">&#128100;</Link>
      </nav>
    )
  }
  
  export default BottomNavBar
