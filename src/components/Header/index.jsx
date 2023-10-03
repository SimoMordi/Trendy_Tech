import { useNavigate } from 'react-router-dom'
import './index.css'



const Header = () => {
   
      const navigate = useNavigate()
      const goToHomePage = () => navigate('/')

  return (
    <div id="header"> 
    <p onClick={goToHomePage}>TRENDY-TECH</p>
          

     <form id='search'>
    <input type="text" id='input' placeholder= "🔍  Search Whats your heart desire today" />      
         
     </form>

    </div>
  )
}

export default Header