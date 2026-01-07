import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "Contact Us", link: "#contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#top"
          className="text-3xl font-extrabold tracking-tight text-blue-700 hover:text-blue-900 transition-colors duration-300"
        >
          SleepWell Cradle Springs
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-4 font-semibold">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="
                px-4 py-2 rounded-lg text-gray-700 font-medium
                transition-all duration-300
                hover:text-white
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700
                hover:shadow-[0_4px_15px_rgba(59,130,246,0.5)]
                hover:scale-105
              "
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <button className="
              bg-orange-500 text-white font-bold px-6 py-2 rounded-xl
              shadow-md transition-all duration-300
              hover:bg-orange-600 hover:scale-105
              hover:shadow-[0_6px_20px_rgba(251,146,60,0.6)]
              hover:brightness-110
              active:scale-95
            ">
              Get Quote
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="
                  px-4 py-2 rounded-lg font-semibold text-gray-700
                  hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700
                  transition-all duration-300 hover:shadow-[0_4px_15px_rgba(59,130,246,0.5)]
                "
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
