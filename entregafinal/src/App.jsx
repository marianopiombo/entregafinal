import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PreFooter from "./components/PreFooter";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/itemDetailContainer";
import Cart from "./components/cart";
import CartContextProvider from "./components/Context/CartContext";
import Checkout from "./components/checkout.jsx";




const App = () =>{
  return(
    <CartContextProvider> 
        <BrowserRouter> 
          <NavBar/>
          <Routes>
          <Route path={"/"} element={ <ItemListContainer />}  />
          <Route path={"/category/:id"} element={ <ItemListContainer />}  />
          <Route path={"/item/:id"} element={ <ItemDetailContainer />}  />
          <Route path={"/Cart"} element={ <Cart />}  />
          <Route path={"/checkout"} element={ <Checkout />}  />
          </Routes>
          <PreFooter/>
          <Footer />
        </BrowserRouter>
    </CartContextProvider>
  )
  
}

export default App;