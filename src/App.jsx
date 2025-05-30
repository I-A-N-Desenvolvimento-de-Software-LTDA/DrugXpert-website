import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet'; 

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/Features/FeatureSection";
import WorkflowSection from "./components/WorkFlow/WorkflowSection"
import Footer from "./components/Footer";
import Subscribe from "./components/Pricing/Subscribe"; 
import BlogSection from "./components/BlogSection";
import Testimonials from "./components/Testimonials";
import PartnersSection from './components/Partners/PartnersSection';
import RoadmapAISection from './components/RoadmapAI/RoadmapAISection';

import About from './pages/About';
import Terms from "./pages/Terms"; 
import Privacy from './pages/Privacy';
import Workflow from './pages/Workflow';
import Refund from './pages/Refund';
import Pricing from './pages/Pricing';
import Roadmap from './pages/Roadmap';
import Features from './pages/Features';
import Partners from './pages/Partners';
import Devices from './pages/Devices';
import Blog from './pages/Blog';
import ReleaseNotes from './pages/ReleaseNotes';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>DrugXpert | Home</title>
                <meta name="description" content="Innovative platform for medication management." />
              </Helmet>
              <HeroSection/>
              <FeatureSection/>
              <WorkflowSection/>
              <PartnersSection/>
              <Subscribe/>
              <RoadmapAISection/>
              <Helmet>
                <title>DrugXpert | Home</title>
                <meta name="description" content="Latest updates and articles from DrugXpert." />
              </Helmet>
              <BlogSection/>
              <Testimonials />
            </>
          } />
          <Route path="/features" element={
            <>
              <Helmet>
                <title>DrugXpert | Features </title>
                <meta name="description" content="Explore the innovative features of DrugXpert." />
              </Helmet>
              <Features />
            </>
          } />
          <Route path="/pricing" element={
            <>
              <Helmet>
                <title>DrugXpert | Pricing </title>
                <meta name="description" content="Learn more about our mission and vision." />
              </Helmet>
              <Pricing />
            </>
          } />
          <Route path="/roadmap" element={
            <>
              <Helmet>
                <title>DrugXpert | RoadMap AI </title>
                <meta name="description" content="Explore the innovative features of DrugXpert." />
                <meta name="keywords" content="DrugXpert, RoadMap AI, innovative features, medication management" />
                <meta name="author" content="DrugXpert Team" />
              </Helmet>
              <Roadmap/>
            </>
          } />
          <Route path="/workflow" element={
            <>
              <Helmet>
                <title>DrugXpert | WorkFlow</title>
                <meta name="description" content="Learn more about our research Workflow." />
              </Helmet>
              <Workflow/>
            </>
          } />
          <Route path="/about" element={
            <>
              <Helmet>
                <title>DrugXpert | About</title>
                <meta name="description" content="Learn more about our mission and vision." />
              </Helmet>
              <About />
            </>
          } />

          <Route path="/partners" element={
            <>
              <Helmet>
                <title>DrugXpert | Partners</title>
                <meta name="description" content="Check out our Partners." />
              </Helmet>
              <Partners />
            </>
          } />

          <Route path="/terms" element={
            <>
              <Helmet>
                <title>DrugXpert | Terms and Conditions</title>
                <meta name="description" content="Please read our terms and conditions." />
              </Helmet>
              <Terms />
            </>
          } />
          <Route path="/privacy" element={
            <>
              <Helmet>
                <title>DrugXpert | Privacy Policy</title>
                <meta name="description" content="Our privacy and data protection policy." />
              </Helmet>
              <Privacy />
            </>
          } />
          <Route path="/refund" element={
            <>
              <Helmet>
                <title>DrugXpert | Refund Policy</title>
                <meta name="description" content="Check out our refund policy." />
              </Helmet>
              <Refund />
            </>
          } />
          <Route path="/supported-devices" element={
            <>
              <Helmet>
                <title>DrugXpert | Supported Devices</title>
                <meta name="description" content="Check out our supported devices." />
              </Helmet>
              <Devices/>
            </>
          } />
          <Route path="/release-notes" element={
            <>
              <Helmet>
                <title>DrugXpert | Release Notes</title>
                <meta name="description" content="Check out our supported devices." />
              </Helmet>
              <ReleaseNotes/>
            </>
          } />
          <Route path="/blog" element={
            <>
              <Helmet>
                <title>DrugXpert | Blog</title>
                <meta name="description" content="Check out our supported devices." />
              </Helmet>
              <Blog/>
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;