import { createContext, useContext, useState } from "react"


export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
        const [cartItems, setCartItems] = useState([])

        const addToCart = (productToAdd) => {
            setCartItems((prevCartItems) => {
                return [...prevCartItems, productToAdd]
            })

        }


  return (
    <CartContext.Provider value= {{
        cartItems, setCartItems,
        addToCart,
    }}>

        {children}
    </CartContext.Provider>
  )
}

export default CartProvider