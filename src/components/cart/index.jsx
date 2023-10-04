import { useSelector, useDispatch } from 'react-redux'
import './index.css'
import { decrement, increment } from '../../Redux/slices/counterSlice'





const Cart = () => {

    const showCounter = useSelector((store) => store.counter)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(increment())
    }

  return (
    <div>
     
    
      <button onClick={handleClick}>
        {`Days Left +${showCounter}`}
      </button>
      <button className='cart' onClick={() => dispatch(decrement())}>--</button>
       
         
    </div>
   
  )
}

export default Cart