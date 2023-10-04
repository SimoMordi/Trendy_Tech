import { createContext } from "react";
import fetchProducts from "../components/FetchProducts";

// create context
const ProductContext = createContext();
// craete provider component
const PrimaryProvider = ({ children }) => {
    const { products } = fetchProducts();


    return (

        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}
export { PrimaryProvider, ProductContext }