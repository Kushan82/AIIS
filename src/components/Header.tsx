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
    'relative text-gray-300 transition-all duration-300 hover:text-cyan-200 before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-cyan-200 hover:before:w-full before:transition-all before:duration-300';

  return (
    <header className="fixed w-full z-50 px-4 py-2">
      <div
        className={`container mx-auto rounded-3xl transition-all duration-300 backdrop-blur-xl shadow-xl border border-cyan-400/10 overflow-hidden ${
          isScrolled
            ? 'bg-gradient-to-r from-cyan-950 via-slate-900 to-cyan-950 shadow-lg'
            : 'bg-gradient-to-br from-cyan-900/60 via-slate-800/60 to-cyan-900/60'
        } animate-fade-in`}
      >
        <div className="px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Atharva Logo"
              className="h-10 w-auto mr-2 drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]"
            />
            <span className="ml-2 text-lg font-bold text-white drop-shadow-md tracking-wide">
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
            className="hidden md:block bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 hover:from-cyan-200 hover:to-blue-300 text-gray-900 font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105 text-sm shadow-md"
          >
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-transform transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
{isOpen && (
  <div className="md:hidden relative rounded-3xl mt-2 overflow-hidden animate-slide-in-down">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/90 to-gray-900/90 backdrop-blur-xl border border-slate-700/30 rounded-3xl shadow-xl z-0" />
    <div className="relative px-6 py-6 flex flex-col space-y-5 z-10">
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
        className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 hover:from-cyan-200 hover:to-blue-300 text-gray-900 py-2 px-6 rounded-full transition-transform transform hover:scale-105 w-full shadow-md font-semibold"
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
