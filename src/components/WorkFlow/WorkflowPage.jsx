import { CheckCircle2 } from "lucide-react";
import codeImg from "/assets/code3.png";
import codeImg2 from "/assets/code2.png";
import { checklistItems } from "../../constants";
import SEO from "../SEO/SEO";

const Workflow = () => {
  return (
    <>
      <SEO 
        title="DrugXpert | Supercharge your Research Workflow" 
        description="Enhance your research workflow with our comprehensive tools and resources." 
        keywords={["research", "workflow", "tools", "resources"]} 
      />
      <div className="mt-20  py-10 px-6 rounded-lg ">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-extrabold text-gray-800">
          🚀 Supercharge your {" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">
            Research Workflow
          </span>
        </h2>
        <p className="text-center text-lg mt-4 text-gray-700">
          🌟 Take your research to the next level with our innovative tools and resources.
        </p>
        <div className="flex flex-wrap justify-center items-center mt-10">
          <div className="p-4 w-full lg:w-1/2">
            <img src={codeImg} alt="Coding" className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12 items-start">
                <div className="text-green-400 mx-6 bg-gray-800 h-12 w-12 p-3 flex justify-center items-center rounded-full shadow-md">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl font-semibold text-gray-800">{item.title} ✨</h5>
                  <p className="text-md text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-16">
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12 items-start">
                <div className="text-green-400 mx-6 bg-gray-800 h-12 w-12 p-3 flex justify-center items-center rounded-full shadow-md">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl font-semibold text-gray-800">{item.title} 🌟</h5>
                  <p className="text-md text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 w-full lg:w-1/2">
            <img src={codeImg2} alt="Coding" className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Workflow;
