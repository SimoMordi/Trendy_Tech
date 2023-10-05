import React, { useContext } from "react";
import './index.css';
import { productContext, useProductContext } from "../../Context/primaryContext";

const ProductPage = () => {
  // const { products } = useContext(productContext);
  const { myProducts, searchTerm } = useProductContext()

  const filteredProducts = myProducts.filter((product) => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="productDisplay">
      {filteredProducts.map((product) => (
        <div id="card" key={product.id}>
          <h4>{product.name}</h4>
          <h5>Category: {product.maker}</h5>
          <h4>Price: $ {product.price}</h4>
          <img id="productImg" src={product.image} />
        </div>
      ))}
    </div>
  );     
  
};

export default ProductPage;
