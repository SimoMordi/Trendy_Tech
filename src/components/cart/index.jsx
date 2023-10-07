import { useProductContext } from "../../Context/ProductContext";

const Cart = () => {
  const { cartItems } = useProductContext();

  return (
    <div>
     
      <h1>Cart</h1>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
