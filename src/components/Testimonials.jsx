import { userTestimonials, partnerTestimonials } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("user"); // "user" or "partner"

  const renderTestimonials = (testimonialsArray) => (
    <div className="flex flex-wrap justify-center">
      {testimonialsArray.map((testimonial, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 mb-6">
          <div className="bg-white rounded-lg p-6 text-md border border-neutral-800 text-black h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-neutral-700">{testimonial.title}</h3>
            <p className="flex-grow italic mb-4">{testimonial.text}</p>
            <div className="mt-auto border-t pt-4">
              <div className="font-semibold">{testimonial.user}</div>
              <div className="text-sm text-gray-600">{testimonial.position}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const getButtonText = () => {
    return activeTab === "user" ? "Sign Up as a User" : "Partner with Us";
  };

  const getLinkUrl = () => {
    return activeTab === "user" 
      ? "https://app.drugxpert.net/auth-page/signup" 
      : "https://app.drugxpert.net/auth-page/partner";
  };

  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border border-neutral-800 rounded-l-lg ${
              activeTab === "user" 
                ? "bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-white" 
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("user")}
          >
            What Our Users Say? 🤖🔬
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border border-neutral-800 rounded-r-lg ${
              activeTab === "partner" 
                ? "bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-white" 
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("partner")}
          >
            What Our Partner Companies Say? 🏢🤝
          </button>
        </div>
      </div>

      {activeTab === "user" && renderTestimonials(userTestimonials)}
      {activeTab === "partner" && renderTestimonials(partnerTestimonials)}

      <div className="text-center mt-8 mb-12">
        <p className="text-lg font-medium">
          {activeTab === "user" 
            ? "Want to be part of this revolution in science? Try our platform today! 🚀" 
            : "Interested in partnering with us? Join our growing network of partners! 🤝"}
        </p>
        <Link to={getLinkUrl()}>
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-white rounded-md hover:opacity-90 transition-opacity">
            {getButtonText()}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
