import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import About from './pages/About';
import Terms from "./pages/Terms"; 
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeatureSection />
              <Workflow />
              <Pricing />
              <Testimonials />
            </>
          } />
          <Route path="/about" element={<About />} /> 
          <Route path="/terms" element={<Terms />} /> 
          <Route path="/privacy" element={<Privacy />} /> 
          <Route path="/refund" element={<Refund />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

// src="src/assets/logo.png"
// src="src/assets/molecula1.png"
// src="src/assets/molecula2.png"