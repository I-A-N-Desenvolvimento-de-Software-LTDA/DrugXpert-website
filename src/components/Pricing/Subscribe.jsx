import { BadgeCheck } from "lucide-react";
import { pricingOptions } from "../../constants";

const Subscribe = () => {
  return (
    <div className="mt-20 font-sans font-semibold text-gray-800">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-br from-green-600 to-green-900 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <BadgeCheck className="text-green-600" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex mt-5">
                <h1>
                  <a href="/pricing" className="underline text-lg hover:text-[#5c8d2f] transition-colors">See more</a>
                </h1>
              </div>
              <a
                href="https://stripe.com/br?utm_adposition="
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-gradient-to-br from-green-600 to-green-900 border border-green-600 hover:text-white rounded-lg transition duration-50"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <h1>
          <a href="/pricing" className="underline text-lg hover:text-[#5c8d2f] transition-colors">Compare plans</a>
        </h1>
      </div>
    </div>
  );
};

export default Subscribe;
