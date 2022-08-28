

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
import { useState } from "react";
import FindLocation from './Pages/FindLocation/FindLocation';
import Dropdown from "./Component/dropdown/Dropdown";

function App() {
  const { isAuth } = useSelector((state) => state.auth)
  const [liveLoc, setLiveLoc] = useState(false)

  // console.log(process.env.REACT_APP_SERVER_URL)
  const togglerFun = () => {
    liveLoc ? setLiveLoc(false) : setLiveLoc(true)
  }
  return (
    <div className="App">
      <Navbar keys={togglerFun} />
      <Dropdown/>
      { liveLoc && <FindLocation keys={togglerFun}/> }
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
