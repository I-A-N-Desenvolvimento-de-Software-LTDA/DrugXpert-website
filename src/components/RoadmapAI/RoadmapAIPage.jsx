import React from 'react';
import SEO from '../SEO/SEO';

const RoadmapAIPage = () => {
  return (
    <div className="roadmap-ai-page min-h-screen">
      <SEO 
        title="DrugXpert | Roadmap Target Audience Research for AI in Substance Discovery" 
        description="Explore the roadmap to understand the needs of researchers, laboratories, and students for AI in substance discovery. Learn the key steps to ensure the final solution is useful and efficient." 
        keywords={["AI", "Substance Discovery", "Target Audience Research", "Roadmap", "DrugXpert"]} 
      />
      <header className="py-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-tight">🎯 Roadmap: Target Audience Research for AI in Substance Discovery</h1>
        <p className="text-lg mt-2 max-w-3xl mx-auto">This roadmap will help understand the needs of researchers, laboratories, and students who will use the AI, ensuring the final solution is useful and efficient.</p>
      </header>
      <main className="py-10 px-6 lg:px-20">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">🔍 Key Steps</h2>
          <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
            <li className="hover:text-green-600 transition">Define Research Objectives</li>
            <li className="hover:text-green-600 transition">Identify the Target Audience</li>
            <li className="hover:text-green-600 transition">Choose Data Collection Methodologies</li>
            <li className="hover:text-green-600 transition">Develop Research Instruments</li>
            <li className="hover:text-green-600 transition">Execute Data Collection</li>
            <li className="hover:text-green-600 transition">Analyze Data and Extract Insights</li>
            <li className="hover:text-green-600 transition">Create a Report and Apply Findings</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800">🏁 1. Define Research Objectives</h2>
          <p className="mt-4 text-gray-700">What do we want to discover?</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Who are the end users? (researchers, students, laboratories, startups...)</li>
            <li>What challenges do they face in substance discovery?</li>
            <li>How do they currently test new molecules?</li>
            <li>What role can AI play to facilitate this process?</li>
          </ul>
          <p className="mt-4 text-gray-700">Example objective: <span className="italic">"Understand how researchers and laboratories currently conduct chemical tests, their challenges, and how AI can optimize this process."</span></p>
          <p className="mt-4 font-semibold text-gray-800">Expected outcomes:</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Map specific challenges in discovering new substances</li>
            <li>Identify opportunities for automation and AI</li>
            <li>Understand how researchers interact with technological tools</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800">👥 2. Identify the Target Audience</h2>
          <p className="mt-4 text-gray-700">Who will be interviewed?</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Academic researchers (universities, research institutes)</li>
            <li>Pharmaceutical laboratories (large companies and startups)</li>
            <li>Students in chemistry, biomedicine, and biotechnology</li>
            <li>Healthcare professionals dealing with experimental substances</li>
          </ul>
          <p className="mt-4 text-gray-700">Where to find them?</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Universities and research centers</li>
            <li>Scientific events and conferences</li>
            <li>Online groups and forums like ResearchGate, PubMed, Reddit, and LinkedIn</li>
            <li>Partnerships with laboratories and startups</li>
          </ul>
          <p className="mt-4 font-semibold text-gray-800">Engagement tips:</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Offer a summary of the research results as an incentive</li>
            <li>Create quick polls on scientific social networks</li>
            <li>Contact professors and academic coordinators for support</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800">📊 3. Choose Data Collection Methodologies</h2>
          <table className="table-auto border-collapse border border-gray-300 w-full mt-6 text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">🛠️ Method</th>
                <th className="border border-gray-300 px-4 py-2">🎯 Advantage</th>
                <th className="border border-gray-300 px-4 py-2">🚨 Disadvantage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition">
                <td className="border border-gray-300 px-4 py-2">Individual interviews</td>
                <td className="border border-gray-300 px-4 py-2">Detailed and in-depth responses</td>
                <td className="border border-gray-300 px-4 py-2">Time-consuming</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="border border-gray-300 px-4 py-2">Online questionnaires</td>
                <td className="border border-gray-300 px-4 py-2">Quick collection of many responses</td>
                <td className="border border-gray-300 px-4 py-2">May have a low response rate</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="border border-gray-300 px-4 py-2">Focus groups</td>
                <td className="border border-gray-300 px-4 py-2">Open discussion generates new insights</td>
                <td className="border border-gray-300 px-4 py-2">Difficult to organize</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="border border-gray-300 px-4 py-2">Secondary data analysis</td>
                <td className="border border-gray-300 px-4 py-2">Use of already conducted research</td>
                <td className="border border-gray-300 px-4 py-2">Data may be outdated</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-6 text-gray-700">Suggested tools:</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Google Forms or Typeform → Creating questionnaires</li>
            <li>Zoom, Google Meet, or Microsoft Teams → Interviews with experts</li>
            <li>Miro, Notion, or Trello → Organizing and analyzing insights</li>
          </ul>
        </section>

        {/* Additional sections for steps 4 to 7 can be added here following the same structure */}
      </main>
      <footer className="py-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center shadow-inner">
        <p className="text-sm">&copy; 2025 DrugXpert. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RoadmapAIPage;