import { useEffect, useState } from 'react';

export default function Header() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'contact'];
      let current = 'home';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItem = (id, label) => (
    <a
      href={`#${id}`}
      className={`
        px-4 py-2 rounded-lg font-semibold transition-all duration-300
        ${
          active === id
            ? 'bg-blue-600 text-white shadow-md'
            : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
        }
      `}
    >
      {label}
    </a>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <a
          href="#home"
          className="text-4xl md:text-5xl font-extrabold tracking-wide text-indigo-800"
        >
          SleepWell Cradle Springs
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-3">
          {navItem('about', 'About')}
          {navItem('products', 'Products')}
          {navItem('contact', 'Contact')}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="
            bg-orange-500 text-white px-6 py-2 rounded-xl font-bold
            hover:bg-orange-600 transition-all duration-300
          "
        >
          Get Quote
        </a>
      </div>
    </header>
  );
}
