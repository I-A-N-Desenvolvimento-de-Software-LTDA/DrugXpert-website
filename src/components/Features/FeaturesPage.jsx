import { BadgeCheck } from "lucide-react";
import SEO from "../SEO/SEO";
import { featuresPage } from "../../constants";

const FeaturesPage = () => {
  const seoData = {
    title: "DrugXpert Features | Boost Productivity in Pharmaceutical Management",
    description: "Explore DrugXpert's powerful features designed to streamline pharmaceutical processes, enhance drug management, and boost productivity effortlessly.",
    keywords: ["pharmaceutical management", "drug management", "healthcare software", "productivity tools", "DrugXpert features"]
  };

  return (
    <div className="mt-20 max-w-7xl mx-auto px-4">
      {/* Add SEO component */}
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-gradient">
          🚀 Features That Shine
        </h1>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
          Discover how <strong>DrugXpert</strong> can enhance your pharmaceutical management with cutting-edge features designed to boost productivity effortlessly. 🌟
        </p>
      </div>

      <div className="space-y-12">
        {featuresPage.map((feature, index) => (
          <div key={index} className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} items-center gap-8 bg-white shadow-lg rounded-lg p-6`}>            
            <div className="lg:w-1/2">
              <img
                src={feature.image || 'default-image.png'}
                alt={feature.text}
                className="w-full h-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-4xl text-green-500">
                    {feature.icon || '✨'}
                  </div>
                  <p className="text-4xl font-semibold text-gray-800">
                    {feature.text} 
                  </p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                {feature.description} 💡
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
