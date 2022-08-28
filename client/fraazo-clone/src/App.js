

import "./App.css";
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"


import Login from './Pages/Auth/Login';
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from './Pages/Products&details/ProductDetails';
import SamHome from './Pages/HomePageComponents/SamHome';
import Checkoutpage from './Pages/Cart/components/Checkoutpage';
import MenuPage from './Pages/Products&details/MenuPage';
import Order from './Pages/OrderPage/Order';
import RequireAuth from './RequireAuth/RequireAuth';
import { useSelector } from 'react-redux';



function App() {
  const { isAuth } = useSelector((state) => state.auth)

  return (
    <div className="App">
      <Navbar />
     { !isAuth && <Login />}
      <Routes>

        <Route path='/' element={<SamHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<MenuPage />} />
        <Route path='/productsdetails/:id' element={<ProductDetails />} />
        <Route path='/productsdetails/:id' element={<ProductDetails />} />
        <Route path='/checkoutpage' element={<Checkoutpage />} />
        <Route path='/profile/order' element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        } />
      </Routes>
      
      <Footer />

    </div>
  );
}

export default App;
