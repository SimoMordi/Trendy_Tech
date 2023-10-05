import { useNavigate } from 'react-router-dom'
import './index.css'



const Header = () => {
   
      const navigate = useNavigate()
      const goToHomePage = () => navigate('/')

  return (
    <div id="header"> 
    <p onClick={goToHomePage}>TRENDY-TECH</p>
      
    </div>
  )
}

export default Header