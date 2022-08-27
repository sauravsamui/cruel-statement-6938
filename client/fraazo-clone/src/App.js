import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import DownloadApp from './Component/DownloadApp';
import Login from './Pages/Login';
import NumberVerify from './Pages/NumberVerify';
// import Home from "./SamComponents/SamHome"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <DownloadApp/>
     <Footer/>
    </div>
  );
}

export default App;
