import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { ProductDetails } from './Store/Products/ProductDetails';
//import { Menu } from '@chakra-ui/react';
import MenuPage from './Store/Products/MenuPage';
//import DownloadApp from './Component/DownloadApp';
// import Home from "./SamComponents/SamHome"

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <DownloadApp/> */}
     <MenuPage />
     {/* <ProductDetails /> */}
     <Footer/>
    </div>
  );
}

export default App;
