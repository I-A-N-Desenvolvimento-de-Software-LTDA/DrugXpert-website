import { resourcesLinks, platformLinks, communityLinks, companyLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 mx-5 font-sans font-semibold text-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-4">
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-md font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-black-300 hover:text-[#5c8d2f]">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-md font-bold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-black-300 hover:text-[#5c8d2f]">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-md font-bold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-black-300 hover:text-[#5c8d2f]">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-md font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-black-300 hover:text-[#5c8d2f]">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-6 border-neutral-600" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Contato */}
          <div className="text-left flex-1 min-w-[200px]">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Contact Us</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <p>Support Hours: <span className="font-medium">09:30 AM - 06:00 PM</span></p>
              <p>Phone: <span className="font-medium">+55-12-98297-0005</span></p>
              <p>
                Live Chat: <a href="#" className="text-gradient font-medium hover:underline">Get help now!</a>
              </p>
              <p>
                Email: <a href="mailto:support@drugxpert.net" className="text-gradient font-medium hover:underline">support@drugxpert.net</a>
              </p>
              {/* Redes Sociais */}
              <div className="flex space-x-4 mt-4">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/discord-icon.png" alt="Discord" className="h-6 w-6 text-green-600" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/youtube-icon.png" alt="YouTube" className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Botões para Google Play e App Store e Mensagem de direitos reservados */}
          <div className="flex-1 flex flex-col items-center">
            {/* Botões para Google Play e App Store */}
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src="/assets/icons/google-play.png" alt="Get it on Google Play" className="h-12 w-auto" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src="/assets/icons/app-store.png" alt="Download on the App Store" className="h-8 w-auto" />
              </a>
            </div>

            {/* Mensagem de direitos reservados com logo ao lado */}
            <div className="flex items-center justify-center">
              <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
              <p className="text-center text-gray-700 text-sm">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* CNPJ */}
          <div className="text-right flex-1 space-y-1 text-sm text-gray-700">
            <p className="text-sm text-gray-700">DrugXpert Tecnologia e Inovação LTDA</p>
            <p className="text-sm text-gray-700">CNPJ: <span className="font-medium">55.950.775/0001-10</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
