import { useState, useEffect } from "react";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import { heroFeatures } from "../constants";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    // Adicionei a classe 'font-sans' para alinhar a fonte com RoadmapAISection
    <div className="relative overflow-hidden py-12 lg:py-20 font-sans font-semibold text-gray-800">
      {/* Background gradient overlay */}
      <div className="absolute inset-0  opacity-50 -z-10"></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Animated heading */}
        <h1 
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-center tracking-tight transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          DrugXpert drug research platform
          <span className="block mt-2 bg-gradient-to-br from-green-600 to-green-900 text-transparent bg-clip-text">
            for everyone
          </span>
        </h1>
        
        {/* Tagline with animation */}
        <p 
          className={`mt-8 text-xl text-center text-neutral-600 max-w-3xl leading-relaxed transition-all delay-300 duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Unlock the secrets of drug discovery with DrugXpert, your partner in pioneering pharmaceutical research!
        </p>
        
        {/* Call to action buttons with hover effects */}
        <div 
          className={`flex flex-wrap justify-center gap-4 my-12 transition-all delay-500 duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://app.drugxpert.net/"
            className="text-white bg-gradient-to-br from-green-600 to-green-900 py-4 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start for free
          </a>
          <a 
            href="https://docs.drugxpert.net/" 
            className="py-4 px-8 rounded-lg border border-[#215153] font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-300"
          >
            Documentation
          </a>
        </div>
        
        {/* Video showcase with improved layout - mobile responsive */}
        <div 
          className={`w-full mt-12 transition-all delay-700 duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-6xl mx-auto">
            {/* First video - always visible */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 shadow-lg">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover border-2 border-[#5c8d2f]/30 rounded-2xl"
              >
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Second video - hidden on mobile, visible on md screens and up */}
            <div className="hidden md:block md:w-1/2 rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 shadow-lg">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover border-2 border-[#5c8d2f]/30 rounded-2xl"
              >
                <source src={video4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Added feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center max-w-5xl mx-auto">
            {heroFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#5c8d2f]"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
