import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        DrugXpert drug research platform 
        <span className="bg-gradient-to-r from-[#5c8d2f] to-[#215153] text-transparent bg-clip-text">
          {" "}
          for everyone
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Unlock the secrets of drug discovery with DrugXpert, your partner in pioneering pharmaceutical research!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://app.drugxpert.net/"
          className="bg-gradient-to-r from-[#5c8d2f] to-[#215153] py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#5c8d2f] shadow-sm shadow-[#215153] mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border  border-[#5c8d2f] shadow-sm shadow-[#215153]mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
