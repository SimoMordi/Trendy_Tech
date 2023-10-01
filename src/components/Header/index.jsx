import { useNavigate } from 'react-router-dom'
import './index.css'


const Header = () => {
   
      const navigate = useNavigate()
      const goToHomePage = () => navigate('/')

  return (
    <div> 
      <h1 id='title' onClick={goToHomePage}>TRENDY-TECH</h1>
       <br />
       <br />
       

     <form id='search'>
        <input type="text" id='input' placeholder= "&#x1F50E;&#xFE0E;" />
      
     </form>

    </div>
  )
}

export default Header