import { createContext, useContext, useState } from "react"


export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
        const [cartItems, setCartItems] = useState([])

            const addToCart = (productToAdd) => {
                //logic for addtoCart

            }


  return (
    <CartContext.Provider value= {{
        cartItems,
        setCartItems,
        addToCart,
    }}>

        {children}
    </CartContext.Provider>
  )
}

export default CartProvider