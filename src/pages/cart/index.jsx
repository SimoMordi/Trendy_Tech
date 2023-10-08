import { useCartContext } from '../../Context/CartContext';
import './index.css';

const Cart = () => {
  const { cartItems } = useCartContext();
  
  let subTotal = 0;
cartItems.forEach(item => subTotal += item.price);

 const taxRate = 0.10;
 const shippingFee = 4.50

   const taxAmount = subTotal * taxRate
  const totalPrice = subTotal + taxAmount + shippingFee

  return (
    <div id="cart">
      <h1>Your Shopping Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>No items in the Cart</p>
          ) : (
            cartItems.map((product) => (
              <div className="cart-item" key={product.id}>
                <h4>{product.name}</h4>
                <p>{product.maker}</p>
                <p>Price: ${product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
              
            ))
          )}
        </div>
        
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Price: ${subTotal.toFixed(2)}</p>
          <p>Tax: ${taxAmount.toFixed(2)}</p>
          <p>Shipping: ${shippingFee.toFixed(2)}</p>
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
