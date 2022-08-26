import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import {Routes,Route} from "react-router-dom";
import { ProductDetails } from './Pages/Products&details/ProductDetails';
// import MenuPage from './Store/Products/MenuPage';
import SamHome from './Pages/HomePageComponents/SamHome';
import ProductItem from './Pages/Products&details/ProductItem';
import Checkoutpage from './Pages/Cart/components/Checkoutpage';
import MenuPage from './Pages/Products&details/MenuPage';
//import DownloadApp from './Component/DownloadApp';
// import Home from "./SamComponents/SamHome"
//import { Menu } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <SamHome/> */}
     <Routes>
      
        <Route path='/' element={<SamHome/>}/>
        <Route path='/products' element={<MenuPage />}/>
        <Route path='/productsdetails/:id' element={<ProductDetails/>}/>
        <Route path='/productsdetails/:id' element={<ProductDetails/>}/>
        <Route path='/checkoutPage' element={<Checkoutpage/>}/>
     </Routes>
     {/* <DownloadApp/> */}
     {/*  */}
     {/* <ProductDetails /> */}
     <Footer/>
    </div>
  );
}

export default App;
