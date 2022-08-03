import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Detailproduct from "./pages/DetailProduct";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail-product" element={<Detailproduct/>} />
      </Routes>
    </div>
  );
}

export default App;
