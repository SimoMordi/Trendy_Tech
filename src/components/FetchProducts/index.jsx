import axios from "axios";
import { useEffect, useState } from "react"


const getProducts = () => {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    const apiKey = "YOUR_API_KEY";
    const apiURL = `https://api.redcircleapi.com/request?api_key=${apiKey}&type=category&category_id=5xtg8`;

    axios.get(apiURL)
      .then((response) => {
      
        const data = response.data.category_results;
        setProducts(data);
      })
  
  }, []);

  return { products };
};

export default getProducts


