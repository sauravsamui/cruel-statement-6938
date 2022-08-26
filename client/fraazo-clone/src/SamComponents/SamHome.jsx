
import Navbar from '../Component/Navbar';
import Home from "./Home"
import Fruits from "./Fruits"
import BestDeals from "./BestDeals"
import Vegetables from './Vegetables';
import CenterImages from "./CenterImages"


function SamHome() {
  return (
    <>

        <Navbar />
        <Home />
        <BestDeals />
        <CenterImages />
        <Fruits />
        <Vegetables />
     
    </>
  );
}

export default SamHome;
