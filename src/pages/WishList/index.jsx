import { useWishListContext } from "../../Context/WishlistContext"
import './index.css'




const WishList = () => {

  const { wishList } = useWishListContext()


  return (
    <div id="wishList">
      <h1>Wish List</h1>
      {wishList.length === 0 ? (
        <p>No items in Wishlist</p>
      ) : (
        wishList.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.maker}</p>
            <p>Price: ${product.price}</p>

          </div>
        ))
      )}
    </div>
  )
}

export default WishList