import { useWishListContext } from "../../Context/WishlistContext"





const WishList = () => {

  const { WishList } = useWishListContext()


  return (
    <div>
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