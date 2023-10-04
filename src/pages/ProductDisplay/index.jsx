
import { useContext } from 'react';
import { ProductContext } from '../../Context/primaryContext';
import './index.css'

const ProductPage = () => {

  const { products } = useContext(ProductContext);

  return (
    <div  id="productDisplay">

      {products.map((product) => (

        <div key={product.id}>

          <h3>Name: {product.name}</h3>
          <h3>Maker: {product.maker}</h3>
          <h3>Price: $ {product.price}</h3>

        </div>

      ))}
    </div>
  );
};

export default ProductPage;
