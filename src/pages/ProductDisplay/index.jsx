

import getProducts from '../../components/FetchProducts';
import './index.css';

const ProductPage = () => {
  const { products } = getProducts();

  

  return (
    <div id="productDisplay">
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

