import logo from '../assets/logo.png';

export default function Header() {
  const navItems = [
    { name: 'About', color: 'bg-green-500 hover:bg-green-600' },
    { name: 'Products', color: 'bg-indigo-700 hover:bg-indigo-800' },
    { name: 'Contact', color: 'bg-pink-500 hover:bg-pink-600' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Brand with Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="SleepWell Logo"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="leading-tight">
            <span className="block text-2xl md:text-3xl font-semibold tracking-wide text-gray-900 group-hover:text-indigo-700 transition">
              SleepWell
            </span>
            <span className="block text-sm md:text-base font-medium text-gray-500 tracking-wide">
              Cradle Springs
            </span>
          </div>
        </a>

        {/* Navigation Buttons */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className={`
                px-5 py-2 md:px-6 md:py-3
                rounded-full
                text-white font-semibold
                text-sm md:text-base
                transition transform hover:scale-105 shadow-md hover:shadow-lg
                ${item.color}
              `}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
