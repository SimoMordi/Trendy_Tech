import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './Context/ProductContext.jsx'
import CartProvider from './Context/CartContext.jsx'
import WishListProvider from './Context/WishlistContext.jsx'
// import { Provider } from 'react-redux'
// import store from './Redux/store.js'
// import { PrimaryProvider } from './Context/primaryContext.jsx'
// import IfApi from './Context/if-I-find-good-Api.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <IfApi> */}
      {/* <PrimaryProvider> */}
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <App />
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
      {/* </PrimaryProvider> */}
      {/* </IfApi> */}
    </BrowserRouter>
  </React.StrictMode>,
)
