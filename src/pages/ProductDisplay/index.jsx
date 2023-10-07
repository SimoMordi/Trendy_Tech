
import { useProductContext } from '../../Context/ProductContext';
import './index.css';
// import { useProductContext } from "../../Context/if-I-find-good-Api";



const ProductPage = () => {
  // const { myProducts } = useContext(productContext);
  const { filteredProducts, } = useProductContext()


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