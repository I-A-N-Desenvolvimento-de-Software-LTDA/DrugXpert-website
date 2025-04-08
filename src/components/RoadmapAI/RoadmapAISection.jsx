import React from 'react';

const RoadmapAISection = () => {
  return (
    <section className="roadmap-ai-section py-16 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 tracking-wide text-gray-800">
          AI Roadmap
        </h2>
        <p className="text-center text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore the future of our platform with the AI Roadmap. Discover upcoming innovations and improvements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="roadmap-item bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Phase 1: Initial Integration</h3>
            <p className="text-gray-600">
              Implementation of basic AI functionalities for data analysis and user support.
            </p>
          </div>
          <div className="roadmap-item bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Phase 2: Resource Expansion</h3>
            <p className="text-gray-600">
              Addition of new AI modules for advanced forecasting and personalization.
            </p>
          </div>
          <div className="roadmap-item bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Phase 3: Full Automation</h3>
            <p className="text-gray-600">
              Complete automation of processes with AI, ensuring maximum efficiency and accuracy.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
        <h1>
          <a href="/roadmap" className="underline text-lg hover:text-[#5c8d2f] transition-colors">See more</a>
        </h1>
      </div>
      </div>
    </section>
  );
};

export default RoadmapAISection;