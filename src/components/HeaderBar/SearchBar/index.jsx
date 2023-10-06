import { useState } from 'react';
import PopUp from '../../../pages/Pop-up';
import { useProductContext } from '../../../Context/primaryContext';
import './index.css'

const SearchBar = () => {
  // Getting context values
  const { myProducts, searchTerm, setSearchTerm } = useProductContext()
  
  // Local state for managing Popup visibility
  const [openPopUp, setopenPopUp] = useState(false);
  
  // Filtering products based on searchTerm
  const filteredProducts = myProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handling input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    if (event.target.value !== "") {
      setopenPopUp(true);  // Open popup if search term is not empty
    } else {
      setopenPopUp(false); // Close popup if search term is empty
    }
  };
  
  
  return (
    <div id='searchBar'>
      <form id="search">
        <input
          id="searchInput"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="🔍  Search What's your heart desire today"
        />
      </form>
      {openPopUp && 
        <PopUp 
          filteredProducts={filteredProducts}
          closePopUp={() => setopenPopUp(false)}  // Function to close the popup
        />
      }
    </div>
  );
};

export default SearchBar;
