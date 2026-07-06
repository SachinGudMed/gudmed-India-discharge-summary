import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Gudmed1-removebg-preview.png";

const navLinks = [
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
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#C9912A]/20 bg-white backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="GudMed"
            className="h-10 w-auto mt-2"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-black transition hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            onClick={onDemoClick}
            className="rounded-lg bg-[#2E4168] px-5 py-2.5 text-sm font-semibold text-white transition cursor-pointer hover:bg-[#1e2d4a]"
          >
            Request Demo →
          </button>
        </div>

        {/* Mobile */}
        <button className="text-slate-700 lg:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;