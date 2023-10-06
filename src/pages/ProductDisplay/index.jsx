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
          <img className="productImg" src={product.image} />
          <p className="name">{product.name}</p>
          <p className="brand">Brand: {product.maker}</p>
          <p className="price"> ${product.price}</p>
        </div>
      ))}
    </div>
  );     
  
};

export default ProductPage;