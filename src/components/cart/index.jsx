import { useSelector, useDispatch } from 'react-redux'
import './index.css'
import { decrement, increment } from '../../Redux/slices/counterSlice'
import Header from '../Header'
import BottomNavBar from '../bottomNavBar'


const Cart = () => {

    const showCounter = useSelector((store) => store.counter)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(increment())
    }

  return (
    <div>
       <Header />
       <br />
      <button onClick={handleClick}>
        {`Days Left +${showCounter}`}
      </button>
      <button className='cart' onClick={() => dispatch(decrement())}>--</button>
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
      <BottomNavBar />
         
    </div>
   
  )
}

export default Cart