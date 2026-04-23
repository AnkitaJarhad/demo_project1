import facebook from "../assets/Facebook.png";
import youtube from "../assets/YouTube Logo.png";
import x from "../assets/X.png";
import instagram from "../assets/Instagram.png";
import linkedin from "../assets/LinkedIn.png";
import footerBg from "../assets/footer-bg1.png";
import copyrightIcon from "../assets/Group.png";

const Footer = () => {
  const socialIcons = [
    facebook,
    youtube,
    x,
    instagram,
    linkedin,
  ];

  const menuItems = ["Home", "About Us", "Contact", "Donation", "FAQ"];

  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14 text-center">

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-8">
          {socialIcons.map((icon, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4"
            >
              {/* Yellow Dot */}
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>

              {/* Icon */}
              <img
                src={icon}
                alt="social icon"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Menu Items */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-7 text-sm sm:text-base mb-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-3"
            >
              {/* Yellow Dot */}
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>

              <a
                href="#"
                className="hover:text-yellow-400 whitespace-nowrap"
              >
                {item}
              </a>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white mb-5"></div>

        {/* Bottom Text */}
        <div className="flex justify-center itens-start gap-3 text-sm sm:text-base  text-white font-thin mt-6 pb-2 max-w-4xl mx-auto">
          <img
            src={copyrightIcon}
            alt="copyright"
            className="w-4 h-4 object-contain mt-1 shrink-0"
          />

          <p className="text-center leading-relaxed">
            2026 Udaan Foundation - Child Rights and You. All rights reserved |
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;