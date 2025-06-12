import React, { useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7654584/pexels-photo-7654584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Insurance Protection Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col-reverse md:flex-row items-center gap-12">
    <div
      className="md:w-1/2 text-center md:text-left"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        Protecting What Matters Most To You
      </h1>
      <p
        className="mt-4 text-base sm:text-lg text-gray-700 max-w-md mx-auto md:mx-0"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        Personalized insurance solutions tailored to your unique needs.
      </p>

      <div
        className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        <button
          onClick={() => navigate('/quote')}
          className="bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors"
        >
          <ShieldCheck className="mr-2 h-5 w-5" />
          Get Protected Now
        </button>
        <button
          onClick={() => navigate('/investment')}
          className="bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors"
        >
          Investment Solutions
        </button>
      </div>
    </div>
  </div>

  {/* Feature Cards */}
  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      {
        title: 'Reliable Coverage',
        desc: 'Comprehensive protection you can count on when you need it most.',
      },
      {
        title: 'Personalized Plans',
        desc: 'Custom solutions designed to fit your specific situation and budget.',
      },
      {
        title: 'Expert Guidance',
        desc: 'Professional advice to help navigate complex insurance decisions.',
      },
    ].map((feature, idx) => (
      <div
        key={idx}
        className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
        data-aos={idx === 1 ? 'flip-up' : idx === 0 ? 'fade-down' : 'fade-up'}
        data-aos-delay={`${idx * 200}`}
        data-aos-duration="700"
      >
        <div className="w-12 h-12 bg-[#cddde6] rounded-full flex items-center justify-center mb-4">
          <ShieldCheck className="h-6 w-6 text-gray-700" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
        <p className="text-gray-700 text-sm">{feature.desc}</p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default Hero;
