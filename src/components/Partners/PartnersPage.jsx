import { PartnersIndex } from "../../constants";

const PartnersPage = () => {
  return (
    <div className="relative mt-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="bg-neutral-900 text-[#91c982] rounded-md h-6 text-lg sm:text-xl font-semibold px-4 py-1 uppercase tracking-wider shadow-lg">
          Partners 🤝
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-8 sm:mt-12 lg:mt-16 font-extrabold tracking-wide text-gray-800">
          Partners in Healthcare and Life{" "}
          <span className="bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-transparent bg-clip-text">
            Sciences 🌟
          </span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
          Discover DrugXpert Partners Accelerating the Digital Transformation of Healthcare 🚀
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-12 lg:mt-20">
        {PartnersIndex.map((partner, index) => (
          <a
            key={index}
            href={partner.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-5 bg-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-neutral-200"
          >
            <div className="w-full mb-4">
              <img
                src={partner.image || 'default-image.png'}
                alt={partner.text}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="flex items-center mb-4">
              <h5 className="ml-4 text-lg sm:text-xl font-semibold text-gray-800">
                {partner.text}
              </h5>
            </div>
            <p className="text-sm sm:text-base text-neutral-600">
              {partner.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
