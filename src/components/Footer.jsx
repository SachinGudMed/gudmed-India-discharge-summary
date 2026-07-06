import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/Gudmed1-removebg-preview.png";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const socialIcons = [
  { icon: FaWhatsapp, link: "https://wa.me/919999196828" },
  { icon: FaFacebookF, link: "https://www.facebook.com/GudMedicare/" },
  { icon: FaTwitter, link: "https://x.com/GudMedicare" },
  { icon: FaInstagram, link: "https://www.instagram.com/gudmedicare/" },
  { icon: FaYoutube, link: "https://www.youtube.com/channel/UC2qkjYWuIsmEuQ5dnMV3l9Q" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/company/gudmed/" },
];

const NewFooter = () => {
  return (
    <footer className="bg-[#2E4168] text-white text-sm md:text-base py-6 px-4 sm:px-6 w-full md:mt-0 -mt-2">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0">
          {/* Left Section */}
          <div className="text-center lg:text-left md:text-left sm:ml-0">
            {/* For mobile devices */}
            <div className="block sm:hidden">
              <p className="text-base sm:text-xl whitespace-nowrap ml-2 mr-2  ">
                &copy; 2026 <strong>Gud Medicare Solutions Private Limited</strong>
              </p>
              <p className="text-lg sm:text-xl">All rights reserved &reg;</p>
              <div className="flex justify-center gap-2">
                <Link to="/privacy-policy" className="hover:underline hover:text-gray-300">Privacy Policy</Link>
                <span>|</span>
                <Link to="/terms-conditions" className="hover:underline hover:text-gray-300">Terms & Conditions</Link>
              </div>

            </div>

            {/* For larger screens */}
            <div className="hidden sm:block">
              <p className="text-lg sm:text-xl lg:text-left xl:-ml-20  md:text-center">
                &copy; 2026 <strong>Gud Medicare Solutions Private Limited</strong> <br />
                All rights reserved &reg;
              </p>
              <div className="flex flex-wrap md:justify-center lg:justify-start gap-2 xl:-ml-20">
                <Link to="/privacy-policy" className="hover:underline hover:text-gray-300">Privacy Policy</Link>
                <span>|</span>
                <Link to="/terms-conditions" className="hover:underline hover:text-gray-300">Terms & Conditions</Link>
              </div>

            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative w-36 h-16 bg-slate-100 p-2 rounded-lg md:mt-0 -mt-4">
              <img src={logo || "/placeholder.svg"} alt="Gudmed logo" className="object-contain w-full h-full" />
            </div>
          </div>

          {/* Contact Info and Social Icons */}
          <div className="text-center lg:text-right space-y-0 xl:-mr-20">
            <div className="flex flex-col items-center sm:items-center lg:items-end space-y-1 sm:space-y-3 w-full md:mt-0 -mt-5">
              <a
                href="tel:+919999196828"
                className="flex items-center justify-center md:justify-center lg:justify-end text-sm sm:text-lg hover:text-gray-300"
              >
                <FaPhoneAlt className="rotate-90 text-xl sm:text-2xl md:text-2xl" />
                <span className="ml-2 text-base sm:text-lg md:text-xl"> Contact Us: +91-9999196828</span>
              </a>

              <a
                href="mailto:cs@gudmed.in"
                className="flex items-center text-lg sm:text-xl md:text-xl text-center sm:text-center lg:text-right hover:text-gray-300"
              >
                <FaEnvelope className="text-xl mr-2" />
                Email Us: cs@gudmed.in
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 xl:-mr-24 sm:justify-center md:justify-center lg:justify-end w-full md:gap-2 lg:gap-4 mt-4 lg:mt-2">
             {socialIcons.map(({ icon: Icon, link }, index) => (
  <a
    key={index}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-300 flex items-center justify-center bg-[#2E4168] rounded-full"
    style={{
      width: "clamp(2.4rem, 3vw, 3rem)",
      height: "clamp(2.4rem, 3.5vw, 3.2rem)",
      fontSize: "clamp(1.50rem, 3vw, 1.4rem)",
    }}
  >
    <Icon />
  </a>
))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default NewFooter