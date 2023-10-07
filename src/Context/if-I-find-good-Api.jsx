// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";

// // create context and export it
// export const primaryContext = createContext();
// // create context function and export it
// export const useProductContext = () => useContext(primaryContext)
// //create a provider and export it to wrap App with it 
// const IfApi = ({children}) => {

// const [myProducts, setmyProducts] = useState([]);
// const [searchTerm, setSearchTerm] = useState("");
  
//     useEffect(() => {
//       // const apiKey = "26AFF168CBD24F7B944275C00CBFEBB8"
//       // const apiURL = `https://api.redcircleapi.com/request?api_key=${apiKey}&type=category&category_id=5xtg8`;
     
  
//       axios.get('https://fakestoreapi.com/products').then((response) => {
//         const data = response.data;
//         setmyProducts(data);
//         setSearchTerm(data)
//         console.log(response.data);
//       });
//     }, []);



//   return (
//     <primaryContext.Provider
//       value={{ myProducts, setmyProducts, searchTerm, setSearchTerm }}
//     >
//       {children}
//     </primaryContext.Provider>
//   )
// }

// export default IfApi



    