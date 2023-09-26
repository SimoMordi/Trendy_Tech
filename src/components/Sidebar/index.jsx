import { Link } from "react-router-dom";
import './index.css'


const Sidebar = () => {


    return ( 
      <nav className='sidebar'>
          <Link to="/">Trendy-TECH</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
      </nav>
    )
  }
  
  export default Sidebar
