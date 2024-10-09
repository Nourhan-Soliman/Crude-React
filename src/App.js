import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';
import EditProduct from './Components/EditProduct';

import Addproduct from './Components/Addproduct';
import ProductDetails from './Components/ProductDetails';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ marginLeft: '0', paddingTop: '90px' }}> {/* Adjust for Sidebar and Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />

          <Route path="/product" element={<Product />} />
          <Route path="/product/add" element={<Addproduct />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="/product/edit/:id" element={<EditProduct />} /> 


          {/* <Route path="/product/:productID" element={<ProductDetails />} />
          <Route path="/product/:producttitle" element={<ProductDetails />} /> */}



        </Routes>
      </div>
    </Router>
  );
}

export default App;
