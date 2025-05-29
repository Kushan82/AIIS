import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/7654584/pexels-photo-7654584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Protecting What Matters Most To You
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-lg">
              Personalized insurance solutions tailored to your unique needs. Experience peace of mind knowing you're fully protected.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => navigate('/quote')}
                className="bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-3 px-8 rounded-md transition-colors flex items-center justify-center"
              >
                <ShieldCheck className="mr-2 h-5 w-5" />
                Get Protected Now
              </button>
              <button 
                onClick={() => navigate('/investment')}
                className="border border-gray-300 hover:border-[#cddde6] text-gray-700 hover:text-[#cddde6] py-3 px-8 rounded-md transition-colors"
              >
                Investment Solutions
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-[#cddde6] rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Coverage</h3>
            <p className="text-gray-700">Comprehensive protection you can count on when you need it most.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-[#cddde6] rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Plans</h3>
            <p className="text-gray-700">Custom solutions designed to fit your specific situation and budget.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-[#cddde6] rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
            <p className="text-gray-700">Professional advice to help navigate complex insurance decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;