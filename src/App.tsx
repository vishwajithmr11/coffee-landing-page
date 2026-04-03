import React from 'react';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
