import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'C:/Users/itzku/Desktop/website/project/src/assets/logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass =
    'relative text-gray-300 transition-all duration-300 hover:text-[#cddde6] before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-[#cddde6] hover:before:w-full before:transition-all before:duration-300';

  return (
    <header className="fixed w-full z-50 px-4 py-2">
      <div
        className={`container mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg'
            : 'bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm'
        }`}
      >
        <div className="px-6 py-2 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Atharva Logo" className="h-10 w-auto mr-2" />
            <span className="ml-2 text-lg font-bold text-white">
              Atharva Insurance & Investment Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={navLinkClass}>Home</Link>
            <Link to="/investment" className={navLinkClass}>Investment</Link>
            <Link to="/about" className={navLinkClass}>About</Link>
            <Link to="/testimonials" className={navLinkClass}>Testimonials</Link>
            <a href="#contact" className={navLinkClass}>Contact</a>
          </nav>

          <button
            onClick={() => navigate('/quote')}
            className="hidden md:block bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-1.5 px-5 rounded-full transition-transform transform hover:scale-105 text-sm"
          >
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-transform transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 rounded-3xl mt-2 animate-fade-in-down">
            <div className="px-6 py-4 flex flex-col space-y-4">
              <Link to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/investment" className={navLinkClass} onClick={() => setIsOpen(false)}>Investment</Link>
              <Link to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/testimonials" className={navLinkClass} onClick={() => setIsOpen(false)}>Testimonials</Link>
              <a href="#contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</a>
              <button
                onClick={() => {
                  navigate('/quote');
                  setIsOpen(false);
                }}
                className="bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-2 px-6 rounded-full transition-transform transform hover:scale-105 w-full"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
