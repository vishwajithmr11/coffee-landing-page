import React from 'react';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import './index.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      {/* Other sections will go here */}
    </div>
  );
}

export default App;
