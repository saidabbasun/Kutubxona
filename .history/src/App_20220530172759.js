import Home from "./Components/Home/Home.jsx"
import Catagory from './Components/Home/Catagory';
import './Style/Globl/_globl.scss'
import Aktsiya from "./Components/Aktsiya/Aktsiya.jsx";
import Catalog from "./Components/Ctalog/Catalog.jsx";
function App() {
  return (
    <div>
    <Home/>
    <Catagory/>
    <Aktsiya/>
    <Catalog/>
    </div>
  );
}

export default App;