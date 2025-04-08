import { features } from "../../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Boost Productivity
          <span className="bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-transparent bg-clip-text">
            Effortlessly
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-[#5c8d2f] justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text} ✨</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description} 💡
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center w-full mb-5 md:mb-0">
          <h1>
            <a href="/features" className="underline text-lg hover:text-[#5c8d2f] transition-colors">
              See more
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
