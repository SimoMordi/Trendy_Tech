import { useState } from 'react';
import PopUp from '../../Pop-up';
import 'font-awesome/css/font-awesome.min.css';


// import { useProductContext } from '../../../Context/if-I-find-good-Api';
import './index.css'
import { useProductContext } from '../../../Context/ProductContext';

const SearchBar = () => {

  const { search, setSearch, filteredProducts, myProducts,
    setMyProducts, } = useProductContext();


  const [isPopUpOpen, setIsPopUpOpen] = useState(false);



  const handleSearch = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  };

  const togglePopUp = (shouldShow) => {
    setIsPopUpOpen(shouldShow)
  }
  const handleChange = (event) => {
    handleSearch(event)
    togglePopUp(event.target.value !== "")
  }

  return (
    <div id='searchBar'>
      <form id='search'>
        <input
          id='searchInput'
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="   🔍 What Ultimate Tech Are You Questing For?"

        />
      </form>
      {isPopUpOpen && <PopUp />}

    </div>
  );
};

export default SearchBar;
