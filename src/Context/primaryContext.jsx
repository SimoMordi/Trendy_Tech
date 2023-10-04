import { createContext, useEffect, useState } from "react";
import axios from "axios";

// create context
export const productContext = createContext();
// craete provider component
const PrimaryProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // const apiKey = "26AFF168CBD24F7B944275C00CBFEBB8"
    // const apiURL = `https://api.redcircleapi.com/request?api_key=${apiKey}&type=category&category_id=5xtg8`;

    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
       
        console.log( response.data); 

        const data = response.data;
        setProducts(data);
      })
     
  }, []);
        
    return (

        <productContext.Provider value={{ products }}>
            {children}
        </productContext.Provider>
    )
}
export { PrimaryProvider }