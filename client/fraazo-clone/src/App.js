import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import {Routes,Route} from "react-router-dom";
import { ProductDetails } from './Pages/Products&details/ProductDetails';
import SamHome from './Pages/HomePageComponents/SamHome';
import Checkoutpage from './Pages/Cart/components/Checkoutpage';
import MenuPage from './Pages/Products&details/MenuPage';
import Order from './Pages/OrderPage/Order';
//import DownloadApp from './Component/DownloadApp';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      
        <Route path='/' element={<SamHome/>}/>
        <Route path='/products' element={<MenuPage />}/>
        <Route path='/productsdetails/:id' element={<ProductDetails/>}/>
        <Route path='/productsdetails/:id' element={<ProductDetails/>}/>
        <Route path='/checkoutPage' element={<Checkoutpage/>}/>
        <Route path='/profile/order' element={<Order/>}/>
     </Routes>
     {/* <DownloadApp/> */}

     {/* <Footer/> */}
    </div>
  );
}

export default App;
