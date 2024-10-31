import { featuresPage } from "../../constants";

const FeaturesPage = () => {
  return (
    <div className="relative mt-20 ">
      <div className="text-center">
        <span className="bg-neutral-900 text-[#91c982] rounded-md h-6 text-xl font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Boost Productivity{" "}
          <span className="bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-transparent bg-clip-text">
            Effortlessly
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {featuresPage.map((feature, index) => (
          <div
            key={index}
            className={`flex w-full sm:w-1/2 lg:w-full lg:items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/2 p-4">
              <img
                src={feature.image || 'default-image.png'}
                alt={feature.text}
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-1/2 p-4">
              <div className="flex items-center">
                <div className="flex mx-6 h-16 w-16 p-2 bg-neutral-900 text-[#5c8d2f] justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
              </div>
              <p className="text-md p-2 mb-20 mt-5 text-neutral-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
