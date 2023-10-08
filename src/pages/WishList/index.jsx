import { useWishListContext } from "../../Context/WishlistContext"
import './index.css'


const WishList = () => {
  const { wishList } = useWishListContext()


  return (
    <div className="wishList productDisplay">
      <h1>Wish List</h1>
      {wishList.length === 0 ? (<p>No items in Wishlist</p>)
       : (
        wishList.map((product) => (
          <div id="wishCard" key={product.id}>
            <h4>{product.name}</h4>
            <img className="productImg" src={product.image} />
            <p>{product.maker}</p>
            <p>Price: ${product.price}</p>

          </div>
        ))
      )}
    </div>
  )
}

export default WishList