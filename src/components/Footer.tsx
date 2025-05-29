import React from 'react';
import {  Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from 'C:/Users/itzku/Desktop/website/project/src/assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Atharva Logo" className="h-10 w-auto mr-2" />
              <span className="ml-2 text-xl font-bold">Atharva Insurance & Investment Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing peace of mind through comprehensive insurance solutions since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Insurance Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Life Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Motor Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Insurance</a></li>
            </ul>
            <h4 className="text-lg font-semibold mb-4">Investment Solutions</h4>
            <ul className="space-y-2 mb-4">
              <li><Link to="/investment" className="text-gray-400 hover:text-white transition-colors">Investment Solutions</Link></li>
            </ul>
          </div>
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
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>30 Saraswati bhavan,opp ganjawala</li>
              <li>Boriwali(west), Mumbai 400091</li>
              <li>Phone:+91 90048 98714</li>
              <li>Email: atharvainsurance@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
          <p>&copy;</p>
          <div className="mt-2 md:mt-0 space-x-4">
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