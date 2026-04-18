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
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 text-center">

        {/* Social Icons with Yellow Dots */}
        <div className="flex justify-center gap-5 mb-8">
          {socialIcons.map((icon, index) => (
            <div key={index} className="flex items-center gap-5">
              
              {/* Yellow Dot */}
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full "></span>

              {/* Icon */}
              <img
                src={icon }
                alt="social icon"
                className="w-6 h-6 object-contain cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Menu Items */}
        <div className="flex flex-wrap justify-center gap-7 text-sm mb-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              
              {/* Yellow Dot */}
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>

              <a href="#" className="hover:text-yellow-400 font-inter  whitespace-nowrap">
                {item}
              </a>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white mb-5 "></div>

        {/* Bottom Text with Copyright Icon */}
        <div className="flex justify-center items-center gap-2 text-base text-white font-inter font-thin mt-6 pb-2  ">
          <img
            src={copyrightIcon}
            alt=""
            className="w-4 h-4 object-contain"
          />

          <p>
            2026 Udaan Foundation - Child Rights and You. All rights reserved |
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;