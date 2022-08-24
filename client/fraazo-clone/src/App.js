import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import DownloadApp from './Component/DownloadApp';
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
