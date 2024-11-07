import { PartnersIndex } from "../../constants";

const PartnersPage = () => {
  return (
    <div className="relative mt-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="text-center mb-10">
        <span className="bg-neutral-900 text-[#91c982] rounded-md h-6 text-lg sm:text-xl font-semibold px-4 py-1 uppercase tracking-wider shadow-lg">
          Partners
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-8 sm:mt-12 lg:mt-16 font-extrabold tracking-wide text-gray-800">
          Boost Productivity{" "}
          <span className="bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-transparent bg-clip-text">
            Effortlessly
          </span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
          Discover the tools that empower you to work smarter, not harder.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mt-12 lg:mt-20">
        {PartnersIndex.map((PartnersIndex, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-full mb-4">
              <img
                src={PartnersIndex.image || 'default-image.png'}
                alt={PartnersIndex.text}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="flex h-18 w-8 sm:h-12 sm:w-12 bg-gradient-to-br from-[#5c8d2f] to-[#215153] text-white justify-center items-center rounded-full shadow-md">
                {PartnersIndex.icon}
              </div>
              <h5 className="ml-4 text-lg sm:text-xl font-semibold text-gray-800">
                {PartnersIndex.text}
              </h5>
            </div>
            <p className="text-sm sm:text-base text-neutral-600">
              {PartnersIndex.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
