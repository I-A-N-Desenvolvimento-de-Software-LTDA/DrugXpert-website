import React from 'react';
import { timelineItems, detailedRoadmapItems, versionHistory } from '../../constants';

const ReleaseNotesPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 px-2">Release Notes</h1>
      
      {/* Version History */}
      {versionHistory.map((version) => (
        <section key={version.version} className="my-3 sm:my-4 lg:my-8 p-3 sm:p-4 lg:p-8 bg-gray-50 rounded-lg">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">
            Version {version.version} {version.type} - {version.date}
          </h2>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-start">
            <img 
              src={version.icon}
              alt={`Version ${version.version} features`}
              className="w-[100px] h-[100px] object-cover rounded-lg"
            />
            <div className="w-full md:w-1/2">
              <ul className="list-disc pl-4 space-y-2">
                {version.features.map((feature, index) => (
                  <li key={index}>
                    {feature.title}
                    {feature.subItems && (
                      <ul className="list-disc pl-6 mt-1 text-gray-600 text-sm">
                        {feature.subItems.map((subItem, idx) => (
                          <li key={idx}>{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className={`mt-4 p-4 ${version.status.bgColor} rounded-lg`}>
                <p className={`text-sm ${version.status.textColor}`}>{version.status.text}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Roadmap Section */}
      <section className="my-3 sm:my-4 lg:my-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6 px-2">Roadmap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 relative p-2 sm:p-4 lg:p-8">
          {/* Timeline - visible only on large screens */}
          <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
          
          {/* Timeline Items */}
          {timelineItems.map((item) => (
            <div key={item.quarter} className="bg-white p-4 rounded-lg shadow-md z-10">
              <div className="text-center">
                <span className="text-2xl mb-2">{item.icon}</span>
                <h3 className="text-[#5c8d2f] font-semibold mb-1">{item.quarter}</h3>
                <p className="font-medium text-gray-800 mb-2">{item.phase}</p>
                <p className="text-sm font-medium mb-2">{item.title}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {item.items.map((subItem, idx) => (
                    <li key={idx}>{subItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Planning Section */}
        <div className="mt-6 sm:mt-8 lg:mt-12 p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg">
          <h3 className="text-base sm:text-lg font-semibold text-[#5c8d2f] mb-3 sm:mb-4">In Planning</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm">Pharmaceutical Marketplace</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm">Loyalty Program</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm">Insurance Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Roadmap Section */}
      <section className="my-6 sm:my-8 p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 lg:mb-8">Development Roadmap - DrugXpert</h2>
        
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {detailedRoadmapItems.map((phase) => (
            <div key={phase.phase} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#5c8d2f] flex items-center gap-2 mb-4">
                <span>{phase.icon}</span> {phase.phase}: {phase.title} ({phase.duration})
              </h3>
              <ul className="space-y-4">
                {phase.items.map((item, index) => (
                  <li key={index} className="space-y-2">
                    {item.title && <p className="font-medium">{item.title}</p>}
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      {item.subItems.map((subItem, idx) => (
                        <li key={idx}>{subItem}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReleaseNotesPage;
