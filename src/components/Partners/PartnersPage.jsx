
import { useState, useEffect } from "react";
import { PartnersIndex } from "../../constants";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const PartnersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPartners, setFilteredPartners] = useState([]);
  
  const categories = ["All", ...Array.from(new Set(PartnersIndex.map(partner => partner.category)))];
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPartners(PartnersIndex);
    } else {
      setFilteredPartners(PartnersIndex.filter(partner => partner.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Partners | DrugXpert - Research & Pharmaceutical Collaboration</title>
        <meta name="description" content="Discover DrugXpert's network of trusted partners in healthcare and pharmaceutical research accelerating innovation and breakthrough discoveries." />
        <meta name="keywords" content="pharmaceutical partners, research collaboration, healthcare innovation, life sciences partners" />
      </Helmet>

      <div className="relative px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-20 mb-16 bg-gradient-to-r from-[#215153] to-[#5c8d2f] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[...Array(20)].map((_, i) => (
                <path
                  key={i}
                  d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
              ))}
            </svg>
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <motion.span 
              className="bg-white text-[#215153] rounded-full text-lg sm:text-xl font-semibold px-6 py-2 uppercase tracking-wider shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Partners Ecosystem 🤝
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-5xl lg:text-6xl mt-8 sm:mt-12 lg:mt-16 font-extrabold tracking-wide text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Partners in Healthcare and Life{" "}
              <span className="text-[#87ce46]">
                Sciences 🌟
              </span>
            </motion.h2>
            <motion.p 
              className="mt-6 text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Join forces with industry leaders to accelerate pharmaceutical innovation and research breakthroughs
            </motion.p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#215153] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <a
                href={partner.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-neutral-200 overflow-hidden"
              >
                <div className="relative w-full mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center h-64">
                  <img
                    src={partner.image || '/assets/default-partner.png'}
                    alt={partner.text}
                    className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-110 max-h-56"
                  />
                  <div className="absolute top-0 right-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#91c982]/20 text-[#5c8d2f] rounded-bl-lg">
                      {partner.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#5c8d2f] transition-colors duration-300">
                  {partner.text}
                </h3>
                
                <p className="text-sm text-neutral-600 flex-grow">
                  {partner.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Official Partner</span>
                  <span className="flex items-center text-sm text-[#215153] font-medium">
                    Visit
                    <svg className="w-4 h-4 ml-1 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 mb-16 py-12 px-6 bg-[#f8f9fa] rounded-2xl text-center shadow-inner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Interested in becoming a partner?
          </h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            Join our ecosystem of innovation and help shape the future of pharmaceutical research
          </p>
          <a 
            href="https://app.drugxpert.net/auth-page/partner" 
            className="inline-block px-6 py-3 font-medium bg-gradient-to-r from-[#215153] to-[#5c8d2f] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Apply to Partner With Us
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default PartnersPage;
