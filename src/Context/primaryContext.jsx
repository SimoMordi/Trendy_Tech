import { createContext, useState } from "react";



// create context
export const primaryContext = createContext();
const PrimaryProvider = (props) => {

 
   
 

    return (
        <primaryContext.Provider value={{
            products, setProducts
        }}>
                {props.children}
        </primaryContext.Provider>
    )
}
export default PrimaryProvider;