import { useNavigate } from 'react-router-dom'
import './index.css'

const Header = () => {
   
        const navigate = useNavigate()

  return (
    <div> 
      <h1 id='title' onClick={() => navigate('/')}>TRENDY-TECH</h1>

     <form id='search'>
        <input type="text" id='input' placeholder='🔍' />
     </form>

    </div>
  )
}

export default Header