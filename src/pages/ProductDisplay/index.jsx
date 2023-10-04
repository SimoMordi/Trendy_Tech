import React, { useContext } from "react";
import './index.css';
import { productContext } from "../../Context/primaryContext";

const ProductPage = () => {
  const { products } = useContext(productContext);

  return (
    <div id="productDisplay">
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <h3>Category: {product.category}</h3>
          <h3>Price: $ {product.price}</h3>
          <img id="productImg" src={product.image} />
        </div>
      ))}
    </div>
  );
  
   
  
};

export default ProductPage;
