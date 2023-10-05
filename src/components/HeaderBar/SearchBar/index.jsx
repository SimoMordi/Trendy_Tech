import { useProductContext } from '../../../Context/primaryContext';
import './index.css'




const SearchBar = () => {

  const { searchTerm, setSearchTerm } = useProductContext()

    const handleChange = (event) => {
      setSearchTerm(event.target.value)
    }


  return (
    <div id='searchBar'>
      <form id="search">
        <input
          id="searchInput"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="🔍  Search Whats your heart desire today"
        />
      </form>
    </div>
  );
};

export default SearchBar;
