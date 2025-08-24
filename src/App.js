
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section1 from './components/section1';
import Card from './components/Card';
import Connect from './components/Connect';
import About from './components/About';
import Products from './components/Products';

import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartCount} />

        <div className='container'>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Section1 />
                  <About />
                  <Card />
                  <Connect />
                </>
              }
            />

            <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          </Routes>
        
        </div>
      </div>
    </Router>
    
  );
}

export default App;

