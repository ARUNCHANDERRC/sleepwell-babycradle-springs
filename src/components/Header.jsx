export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Brand with Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          
          {/* Logo Mark */}
          <div className="w-11 h-11 rounded-full bg-indigo-700 flex items-center justify-center">
            <span className="text-white font-bold text-lg tracking-wide">
              SW
            </span>
          </div>

          {/* Brand Text */}
          <div className="leading-tight">
            <span className="block text-2xl md:text-3xl font-semibold tracking-wide text-gray-900 group-hover:text-indigo-700 transition">
              SleepWell
            </span>
            <span className="block text-sm md:text-base font-medium text-gray-500 tracking-wide">
              Cradle Springs
            </span>
          </div>

        </a>

        {/* Navigation */}
     <nav className="hidden md:flex items-center space-x-12 font-semibold text-gray-800 text-base md:text-lg">
  {["About", "Products", "Contact"].map((item) => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      className="relative px-1 py-1 group hover:text-indigo-700 transition-colors"
    >
      {item}
      {/* Animated underline */}
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-700 transition-all group-hover:w-full"></span>
    </a>
  ))}
</nav>


      </div>
    </header>
  );
}
