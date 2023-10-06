import './index.css'

const PopUp = ({ filteredProducts, closePopUp }) => {

    return (
      <div className="popup">
        {filteredProducts.map(product => (
          <div key={product.id}>
           <div className='card' key={product.id}>  
                <h4>{product.name}</h4>
                <h5>Category: {product.maker}</h5>
                <h4>Price: ${product.price}</h4>
                <img className='productImg' src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
        <button onClick={closePopUp}>Close 🗙</button>
      </div>
    );
  };
  
  export default PopUp;
  




  