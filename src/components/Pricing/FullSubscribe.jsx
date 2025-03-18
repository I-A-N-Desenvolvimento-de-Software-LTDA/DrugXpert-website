import { BadgeCheck, BadgeX, CreditCard, ShieldCheck, HelpCircle, Building, ExternalLink } from "lucide-react";
import SEO from "../SEO/SEO"; // Import the SEO component

import { 
  subscribeOptions, 
  paymentMethods, 
  securityFeatures, 
  planComparison, 
  subscriptionFAQs, 
  enterpriseSolutions 
} from "../../constants";

const FullSubscribe = () => {
  // SEO metadata for the subscription page
  const seoData = {
    title: "DrugXpert Subscription Plans | Pricing Options",
    description: "Explore DrugXpert's flexible subscription plans. Choose from Free, Pro, and Enterprise options to enhance your pharmaceutical research capabilities.",
    keywords: [
      "DrugXpert pricing", 
      "pharmaceutical subscription plans", 
      "drug research tools", 
      "pharmaceutical software pricing", 
      "DrugXpert pro plan", 
      "enterprise drug research solutions"
    ]
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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          📌 Subscription Plans
        </h1>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
          Choose the perfect <strong>DrugXpert</strong> plan to elevate your pharmaceutical research experience. 
          Our flexible pricing options are designed to support everyone from individual researchers to large enterprises.
        </p>
      </div>

      {/* Plans Section */}
      <div className="flex flex-wrap">
        {subscribeOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl h-full flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-4xl">{option.emoji}</span>
                  <p className="text-4xl">
                    {option.title}
                    {option.title === "Pro" && (
                      <span className="bg-gradient-to-r from-[#5c8d2f] to-[#91c982] text-transparent bg-clip-text text-xl mb-4 ml-2">
                        (Most Popular)
                      </span>
                    )}
                  </p>
                </div>
                <p className="mb-8 mt-4">
                  <span className="text-5xl mr-2">{option.price}</span>
                  <span className="text-neutral-700 tracking-tight">/Month</span>
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">⭐ Perfect for:</h3>
                <ul className="list-disc pl-5 text-neutral-700">
                  {option.perfectFor.map((user, idx) => (
                    <li key={idx} className="mb-1">{user}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-semibold text-xl mb-4">✅ Features:</h3>
                <ul>
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="mb-3 flex items-start">
                      <BadgeCheck className="min-w-[20px] mt-1" color="green" />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                  {option.notOn.map((notOn, idx) => (
                    <li key={idx} className="mb-3 flex items-start text-neutral-500">
                      <BadgeX className="min-w-[20px] mt-1" color="red"/>
                      <span className="ml-2">{notOn}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href="https://app.drugxpert.net/auth-page/signup"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-8 tracking-tight text-xl hover:bg-gradient-to-r from-[#5c8d2f] to-[#215153] border border-[#5c8d2f] hover:text-white rounded-lg transition duration-50"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Options */}
      <div className="mt-24 border border-neutral-700 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard size={28} className="text-[#5c8d2f]" />
          <h2 className="text-2xl sm:text-3xl font-bold">💳 Secure Payment Options</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods.map((method, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#5c8d2f]"></div>
              <span>{method}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Security & Compliance */}
      <div className="mt-12 border border-neutral-700 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck size={28} className="text-[#5c8d2f]" />
          <h2 className="text-2xl sm:text-3xl font-bold">🔒 Security & Compliance</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#5c8d2f]"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Comparison Table */}
      <div className="mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">📊 Plan Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-neutral-400 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-neutral-500">
                <th className="px-6 py-4 text-left">Feature</th>
                <th className="px-6 py-4 text-center">Free</th>
                <th className="px-6 py-4 text-center">Pro</th>
                <th className="px-6 py-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {planComparison.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-neutral-400' : 'bg-neutral-450'}>
                  <td className="px-6 py-4 font-medium">{row.feature}</td>
                  <td className="px-6 py-4 text-center">{row.free}</td>
                  <td className="px-6 py-4 text-center">{row.pro}</td>
                  <td className="px-6 py-4 text-center">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-24">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle size={28} className="text-[#5c8d2f]" />
          <h2 className="text-2xl sm:text-3xl font-bold">❓ Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {subscriptionFAQs.map((faq, index) => (
            <div key={index} className="border border-neutral-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Q: {faq.question}</h3>
              <p className="text-neutral-700">A: {faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Custom Solutions */}
      <div className="mt-24 mb-16 border border-neutral-700 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Building size={28} className="text-[#5c8d2f]" />
          <h2 className="text-2xl sm:text-3xl font-bold">🤝 Enterprise Custom Solutions</h2>
        </div>
        <p className="mb-6">Need a custom solution? Contact our sales team for:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {enterpriseSolutions.map((solution, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#5c8d2f] mt-2"></div>
              <span>{solution}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold mb-6">🔗 Ready to enhance your research capabilities? Choose your plan now!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.drugxpert.net/auth-page/signup" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#5c8d2f] to-[#215153] rounded-lg hover:opacity-90 transition-opacity text-white">
              Get Started <ExternalLink size={16} className="ml-2" />
            </a>
            <a href="mailto:sales@drugxpert.net" 
              className="inline-flex items-center justify-center px-6 py-3 border border-[#5c8d2f] rounded-lg hover:bg-neutral-200 transition-colors">
              Contact Sales <ExternalLink size={16} className="ml-2" />
            </a>
            <a href="#comparison-table" 
              className="inline-flex items-center justify-center px-6 py-3 border border-neutral-400 rounded-lg hover:bg-neutral-200 transition-colors">
              Compare Plans <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullSubscribe;
