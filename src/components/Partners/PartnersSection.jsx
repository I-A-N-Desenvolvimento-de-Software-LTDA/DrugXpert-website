import Chembl from "/assets/Partners/Chembl_logo.png";
import Nvidia from "/assets/Partners/nvidia-logo-horz.png";
import EPA from "/assets/Partners/EPA_logo.svg";
import FDA from "/assets/Partners/FDA.jpg";
import NIH from "/assets/Partners/NIH.png";
import NCI from "/assets/Partners/NCI.png";
import Pubchem from "/assets/Partners/Pubchemlogo.png";
import HumanMicrobiome from "/assets/Partners/HumanMicrobiome.jpg";
import PSI from "/assets/Partners/PSI_Logo.png";

const PartnersSection = () => {
  return (
    <div className="font-sans font-semibold text-gray-800">
      <h4 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-gradient">
        Partners
      </h4>

      <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-10">
        <div className="flex flex-col items-center">
          <a href="/partners"  rel="noopener noreferrer">
            <img
              src={Chembl}
              alt="Partner Chembl"
              className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/partners"  rel="noopener noreferrer">
            <img
              src={NCI}
              alt="Partner NCI"
              className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/partners"  rel="noopener noreferrer">
            <img
              src={EPA}
              alt="Partner EPA"
              className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/partners"  rel="noopener noreferrer">
            <img
              src={HumanMicrobiome}
              alt="Partner Human Microbiome"
              className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/partners"  rel="noopener noreferrer">
            <img
              src={Nvidia}
              alt="Partner Nvidia"
              className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/partners"  rel="noopener noreferrer">
            <img
              src={PSI}
              alt="Partner PSI"
              className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/partners"  rel="noopener noreferrer">
            <img
              src={FDA}
              alt="Partner FDA"
              className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/partners"  rel="noopener noreferrer">
            <img
              src={NIH}
              alt="Partner NIH"
              className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/partners"  rel="noopener noreferrer">
            <img
              src={Pubchem}
              alt="Partner Pubchem"
              className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
