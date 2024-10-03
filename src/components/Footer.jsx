import { resourcesLinks, platformLinks, communityLinks, companyLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-md font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Seção de Contato em uma nova linha */}
      <div className="mt-6 flex-1">
        <h3 className="text-md font-semibold mb-4">Contact Us</h3>
        <div className="space-y-2"> {/* Adicionado o espaço vertical aqui */}
          <p className="text-neutral-300">Support Hours: 09:30 AM - 06:00 PM</p>
          <p className="text-neutral-300">Phone: +55-12-98297-0005</p>
          <p className="text-neutral-300">
            Live Chat: <a href="#" className="text-blue-400 hover:underline">Get help now!</a>
          </p>
          <p className="text-neutral-300">
            Email: <a href="mailto:support@drugxpert.net" className="text-blue-400 hover:underline">support@drugxpert.net</a>
          </p>
        </div>
      </div>

      <hr className="my-6 border-neutral-600" />

      {/* Seção de Redes Sociais e Botões para Google Play e App Store */}
      <div className="mt-6">
        <div className="flex justify-center space-x-4">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/discord-icon.png" alt="Discord" className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/youtube-icon.png" alt="YouTube" className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
          </a>
        </div>

        {/* Botões para Google Play e App Store abaixo dos ícones das redes sociais */}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src="/assets/icons/google-play.png" alt="Get it on Google Play" className="h-12 w-auto" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src="/assets/icons/app-store.png" alt="Download on the App Store" className="h-8 w-auto" />
          </a>
        </div>
      </div>

      {/* Mensagem de direitos reservados com logo ao lado */}
      <div className="mt-4 flex items-center justify-center">
        <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <p className="text-center text-neutral-400 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
