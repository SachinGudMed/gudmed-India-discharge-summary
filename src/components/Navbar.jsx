import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Gudmed1-removebg-preview.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "How It Works",
    path: "/how-it-works",
  },
  {
    name: "Compliance",
    path: "/compliance",
  },
  {
    name: "ROI",
    path: "/roi",
  },
  {
    name: "Integration",
    path: "/integration",
  },
  {
    name: "Scribble",
    path: "/scribble",
  },
];

const Navbar = ({ onDemoClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#C9912A]/20 bg-white backdrop-blur">
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="GudMed"
            className="h-8 sm:h-10 w-auto mt-1 sm:mt-2"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleLinkClick}
              className="text-xs xl:text-sm font-medium text-black transition hover:underline whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            onClick={onDemoClick}
            className="rounded-lg bg-[#2E4168] px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-semibold text-white transition cursor-pointer hover:bg-[#1e2d4a] whitespace-nowrap"
          >
            Request Demo →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-700 hover:text-slate-900 transition p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#C9912A]/20 bg-white">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-black hover:bg-gray-100 transition"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                onDemoClick();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 rounded-lg bg-[#2E4168] px-4 py-2.5 text-sm font-semibold text-white transition cursor-pointer hover:bg-[#1e2d4a]"
            >
              Request Demo →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;