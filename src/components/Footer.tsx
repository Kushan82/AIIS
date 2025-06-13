import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8 shadow-inner">
      <div className="absolute inset-0 z-0 pointer-events-none animate-pulseSlow">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_40%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Atharva Logo" className="h-10 w-auto mr-2 drop-shadow-lg" />
              <span className="ml-2 text-xl font-bold leading-tight tracking-tight">Atharva Insurance & Investment Solutions</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
              Providing peace of mind through comprehensive insurance solutions since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Insurance Services</h4>
            <ul className="space-y-2 mb-6">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Life Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Motor Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Insurance</a></li>
            </ul>
            <h4 className="text-lg font-semibold mb-4 mt-8">Investment Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/investment" className="text-gray-400 hover:text-white transition-colors">Mutual Funds</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/investment" className="text-gray-400 hover:text-white transition-colors">Investment Solutions</Link></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>30 Saraswati Bhavan, Opp. Ganjawala</li>
              <li>Borivali (West), Mumbai 400091</li>
              <li>Phone: +91 90048 98714</li>
              <li>Email: atharvainsurance@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Atharva Insurance & Investment Solutions. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
