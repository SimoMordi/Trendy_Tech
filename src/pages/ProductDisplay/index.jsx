
import { useContext } from 'react';
import { primaryContext } from '../../Context/primaryContext';
import './index.css'

const ProductDisplay = () => {
  
  
  const {products} = useContext(primaryContext)
   return (
    <div className="productDisplay">
      {Products.map(product => (
        <div key={product.name}>
          <h3>Name: {product.name}</h3>
          <h3>Maker: {product.maker}</h3>
          <h3>Price: $ {product.price}</h3>                    
        </div>
      ))}
    </div>
  );
};


export default ProductDisplay;
