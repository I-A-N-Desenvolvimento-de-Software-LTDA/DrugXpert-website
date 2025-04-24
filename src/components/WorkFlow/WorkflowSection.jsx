import { CheckCircle2 } from "lucide-react";
import codeImg from "/assets/code3.png";
import { checklistItems } from "../../constants";

const Workflow = () => {
  return (
    <div className="mt-20 font-sans font-semibold text-gray-800">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
      Supercharge your{" "}
        <span className="bg-gradient-to-br from-green-600 to-green-900 text-transparent bg-clip-text">
        Research Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="💻 Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-600 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title} 🌟</h5>
                <p className="text-md text-neutral-500">{item.description} ✨</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full mb-6 md:mb-0">
          <h1>
            <a href="/workflow" className="underline text-lg hover:text-green-900 transition-colors">See more</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
