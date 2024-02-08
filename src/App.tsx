import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Header from './components/Header';
import BuyProducts from './components/BuyProducts';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buyProducts" element={<BuyProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
