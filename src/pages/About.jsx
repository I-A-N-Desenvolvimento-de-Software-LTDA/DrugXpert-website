import React from 'react';
import SEO from "../components/SEO/SEO";

const About = () => {
  return (
    <div className="about-page min-h-screen">
      <SEO 
        title="About DrugXpert | Learn about the history and mission of DrugXpert" 
        description="Learn about the history and mission of DrugXpert, a revolutionary drug research platform." 
        keywords={["DrugXpert", "drug research", "pharmaceutical", "history"]} 
      />
      <header className="py-6 text-gray-800 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">About DrugXpert</h1>
        <p className="text-lg mt-2 max-w-3xl mx-auto">Discover the history, mission, and innovative features of DrugXpert, a platform revolutionizing drug research.</p>
      </header>
      <main className="py-10 px-6 lg:px-20">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">The History of DrugXpert</h2>
          <p className="mt-4 text-gray-700">Welcome to DrugXpert, a revolutionary drug research platform designed to empower researchers, scientists, and healthcare professionals in their quest to unlock the secrets of drug discovery. Our journey began with a simple vision: to democratize pharmaceutical research and provide innovative tools that can be accessed by everyone, anywhere, at any time.</p>
          <div className="flex justify-center mt-6">
            <img src="/assets/logo.png" alt="DrugXpert Overview" className="w-3/4 h-auto rounded-lg shadow-md" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Pioneering Features</h2>
          <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
            <li><strong>Drag-and-Drop Interface:</strong> Build, analyze, and innovate effortlessly.</li>
            <li><strong>Multi-Platform Compatibility:</strong> Access tools from any device, anywhere.</li>
            <li><strong>Built-in Templates:</strong> Streamline your research with pre-designed structures.</li>
            <li><strong>Real-Time Preview:</strong> Monitor drug data and insights as they happen.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Collaborative Innovation 🤝</h2>
          <p className="mt-4 text-gray-700">DrugXpert fosters collaboration through tools that break down barriers between researchers worldwide. Share ideas, insights, and breakthroughs in real-time to amplify results and drive progress in pharmaceutical research.</p>
          <div className="flex justify-center mt-6">
            <img src="/assets/molecula1.png" alt="DrugXpert Features" className="w-3/4 h-auto rounded-lg shadow-md" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Our Mission and Innovation 🚀</h2>
          <p className="mt-4 text-gray-700">DrugXpert was founded with a clear mission: to simplify and accelerate the process of pharmaceutical research and development. By providing cutting-edge tools and resources, we aim to empower laboratories worldwide to create vaccines, develop cures for diseases, and innovate in the field of drug discovery.</p>
          <p className="mt-4 text-gray-700">Our platform is designed to break down barriers in pharmaceutical research, offering intuitive solutions that help researchers focus on what truly matters: saving lives and improving global health. With DrugXpert, laboratories can streamline their workflows, collaborate seamlessly, and achieve breakthroughs faster than ever before.</p>
          <div className="flex justify-center mt-6">
            <img src="/assets/molecula2.png" alt="Innovation at DrugXpert" className="w-3/4 h-auto rounded-lg shadow-md" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Artificial Intelligence in DrugXpert 🤖</h2>
          <p className="mt-4 text-gray-700">Artificial Intelligence (AI) is at the core of DrugXpert's innovative solutions. By leveraging AI, we enable laboratories to analyze vast datasets, predict drug interactions, and optimize research processes with unprecedented accuracy and speed.</p>
          <p className="mt-4 text-gray-700">Our AI-driven tools are designed to assist researchers in identifying potential drug candidates, automating repetitive tasks, and providing insights that were previously unattainable. This not only accelerates the drug discovery process but also reduces costs and enhances the overall efficiency of pharmaceutical research.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Looking Ahead 🔮</h2>
          <p className="mt-4 text-gray-700">As we look to the future, DrugXpert is excited to further expand its capabilities, fostering a global community of researchers united by a shared goal: to accelerate drug discovery and improve healthcare outcomes for all.</p>
          <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
            <li><strong>Innovative Technologies:</strong> Integrating AI and machine learning for deeper insights. 🤖</li>
            <li><strong>Strategic Partnerships:</strong> Collaborating with research institutions worldwide. 🌍</li>
            <li><strong>Sustainable Practices:</strong> Promoting environmentally friendly research methods. 🌱</li>
            <li><strong>Community Engagement:</strong> Hosting conferences and workshops to share knowledge.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
