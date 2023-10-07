import { createContext, useContext, useState } from "react"



export const WishListContext = createContext()
export const useWishListContext = () => useContext(WishListContext)

const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([])

    const addToWishList = (productToAdd) => {
        setWishList((prevWishlist) => {
            // Check if the product already exists in the Wishlist
            const existingWishlistItem = prevWishlist.find(
                (item) => item.id === productToAdd.id
            );

            // If the item already exists, just return the existing list
            if (existingWishlistItem) {
                return prevWishlist;
            } else

            return [...prevWishlist, productToAdd];
        });
    };



 return (
    <WishListContext.Provider value={{
        wishList,
        setWishList,
        addToWishList,
    }}>
        {children}
    </WishListContext.Provider>
)
}

export default WishListProvider