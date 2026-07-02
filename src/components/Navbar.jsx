import { Menu } from "lucide-react";
import logo from "../assets/FullLogo_Transparent.png";

const navLinks = [
  {
    name: "How It Works",
    href: "#how",
  },
  {
    name: "Compliance",
    href: "#compliance",
  },
  {
    name: "ROI",
    href: "#roi",
  },
  {
    name: "Integration",
    href: "#integration",
  },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#C9912A]/20 bg-gray-300/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="GudMed"
            className="h-50 w-auto mt-6"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black transition hover:underline"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button className="rounded-lg bg-[#2E4168] px-5 py-2.5 text-sm font-semibold text-white transition cursor-pointer">
            Request Demo →
          </button>
        </div>

        {/* Mobile */}
        <button className="text-white lg:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;