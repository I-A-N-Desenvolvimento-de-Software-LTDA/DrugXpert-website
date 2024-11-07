import Chembl from "/assets/Partners/Chembl_logo.png";
import Nvidia from "/assets/Partners/nvidia-logo-horz.png";
import EPA from "/assets/Partners/EPA_logo.svg";
import FDA from "/assets/Partners/FDA.jpg";
import NIH from "/assets/Partners/NIH.png";
import NCI from "/assets/Partners/NCI.png";
import Pubchem from "/assets/Partners/Pubchemlogo.png";

const PartnersSection = () => {
  return (
    <div className="">
      <h4 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Partners
      </h4>

      <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-10">
        <div className="flex flex-col items-center">
          <img
            src={Chembl}
            alt="Parceiro Chembl"
            className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={NCI}
            alt="Parceiro NCI"
            className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={EPA}
            alt="Parceiro EPA"
            className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Nvidia}
            alt="Parceiro Nvidia"
            className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={FDA}
            alt="Parceiro FDA"
            className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={NIH}
            alt="Parceiro NIH"
            className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Pubchem}
            alt="Parceiro Pubchem"
            className="w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
