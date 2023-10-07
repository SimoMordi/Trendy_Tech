import { useState } from 'react';
import { useProductContext } from '../../Context/ProductContext';
import './index.css'
import { useWishListContext } from '../../Context/WishlistContext';
import { useCartContext } from '../../Context/CartContext';


const PopUp = () => {
  const { filteredProducts } = useProductContext();
  const { addToWishList } = useWishListContext();
  const { addToCart} = useCartContext();
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);

  const closePopUp = () => setIsPopUpOpen(false); // Corrected to actually close the pop-up

  

  return (
    <div className="popup">
      {filteredProducts.map((product) => (
        <div key={product.id}>
          {isPopUpOpen && (
            <div className="card popup-content">
              <p>{product.name}</p>
              <p>{product.maker}</p>
              <h4>Price: ${product.price}</h4>
              <img className="popUpImg" src={product.image} alt={product.name} />
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => addToWishList(product)}>Add to Wishlist</button>
              <button onClick={closePopUp}>Close</button>  {/* Used the closePopUp function */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default PopUp







