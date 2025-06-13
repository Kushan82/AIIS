import React from 'react';
import {
  HeartPulse,
  Car,
  Activity,
  Briefcase,
  TrendingUp,
  LineChart,
  PiggyBank,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Partner logos
import bajaj from '../assets/partners/bajaj.png';
import generali from '../assets/partners/generali.png';
import digit from '../assets/partners/digit.png';
import icici from '../assets/partners/icici.png';
import zurich from '../assets/partners/zurich.png';
import tata from '../assets/partners/tata.png';
import care from '../assets/partners/care.png';
import lic from '../assets/partners/lic.png';
import hdfc from '../assets/partners/hdfc.png';
import reliance from '../assets/partners/reliance.png';

// AMC logos
import amc1 from '../assets/amc/amc1.png';
import amc2 from '../assets/amc/amc2.png';
import amc3 from '../assets/amc/amc3.png';
import amc4 from '../assets/amc/amc4.png';
import amc5 from '../assets/amc/amc5.png';
import amc6 from '../assets/amc/amc6.png';
import amc7 from '../assets/amc/amc7.png';
import amc8 from '../assets/amc/amc8.png';
import amc9 from '../assets/amc/amc9.png';
import amc10 from '../assets/amc/amc10.png';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  aosDelay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  const CardContent = () => (
    <div className="flex flex-col items-start">
      <div className="mb-4 p-3 bg-[#cddde6] rounded-full shadow-md transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );

  const baseClasses =
    'group block bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all border border-gray-100 hover:border-[#cddde6]';

  return link ? (
    <Link to={link} className={baseClasses}>
      <CardContent />
    </Link>
  ) : (
    <div className={baseClasses}>
      <CardContent />
    </div>
  );
};

const Services: React.FC = () => {
  const location = useLocation();
  
  const insuranceServices = [
    {
      icon: <HeartPulse size={28} color="#111827" />,
      title: 'Life Insurance',
      description:
        "Secure your family's financial future with comprehensive life insurance coverage tailored to your needs.",
      link: '/insurance/life',
    },
    {
      icon: <Car size={28} color="#111827" />,
      title: 'Motor Insurance',
      description:
        'Complete protection for your vehicles with comprehensive, third-party liability, and collision coverage.',
      link: '/insurance/motor',
    },
    {
      icon: <Activity size={28} color="#111827" />,
      title: 'Health Insurance',
      description:
        'Quality healthcare coverage with access to top medical facilities and comprehensive wellness benefits.',
      link: '/insurance/health',
    },
    {
      icon: <Briefcase size={28} color="#111827" />,
      title: 'Commercial Insurance',
      description:
        'Protect your business with tailored coverage for property, liability, and business interruption.',
      link: '/insurance/commercial',
    },
  ];

  const investmentServices = [
    {
      icon: <TrendingUp size={28} color="#111827" />,
      title: 'Mutual Funds',
      description:
        'Professionally managed investment portfolios diversified across multiple asset classes for optimal returns.',
      link: '/investment/overview',
    },
    {
      icon: <LineChart size={28} color="#111827" />,
      title: 'Systematic Investment Plan (SIP)',
      description:
        'Regular, disciplined investing through automated monthly contributions to build long-term wealth.',
      link: '/investment/overview',
    },
    {
      icon: <PiggyBank size={28} color="#111827" />,
      title: 'Systematic Withdrawal Plan (SWP)',
      description:
        'Structured withdrawal system providing regular income from your investment portfolio.',
      link: '/investment/overview',
    },
  ];

  const partnerLogos = [
    bajaj,
    generali,
    digit,
    icici,
    zurich,
    tata,
    care,
    lic,
    hdfc,
    reliance,
  ];

  const [currentLogo, setCurrentLogo] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % partnerLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
<section
  id="services"
  className="relative bg-gradient-to-br from-indigo-200 via-indigo-100 to-indigo-300 py-20"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Insurance Section */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Insurance Services
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
        Protect what matters most with comprehensive insurance options tailored to your lifestyle.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {insuranceServices.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>

    {/* Insurance Partners Carousel */}
    <div className="mt-20 text-center">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">
        Our Insurance Partners
      </h3>
      <div className="relative overflow-hidden w-full h-24">
        <motion.div
          className="flex gap-12 items-center min-w-[200%]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <img
              key={`${logo}-${i}`}
              src={logo}
              alt={`Partner ${i}`}
              loading="lazy"
              className="h-12 sm:h-16 md:h-20 object-contain mx-4 opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </motion.div>
      </div>
    </div>
  </div>

  {/* Investment Section */}
  <div className="text-center mt-24 mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
      Investment Solutions
    </h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
      Strategic financial products designed to grow and preserve your wealth over time.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-16">
    {investmentServices.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </div>

  {/* AMC Logos Carousel */}
  <div className="mt-20 text-center">
    <h3 className="text-xl font-semibold text-gray-700 mb-6">
      Our Mutual Fund Partners (AMCs)
    </h3>
    <div className="relative overflow-hidden w-full h-24">
      <motion.div
        className="flex gap-12 items-center min-w-[200%]"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        {[...Array(2)].flatMap(() => [
          amc1, amc2, amc3, amc4, amc5, amc6, amc7, amc8, amc9, amc10,
        ]).map((logo, i) => (
          <img
            key={`${logo}-${i}`}
            src={logo}
            alt={`AMC ${i + 1}`}
            loading="lazy"
            className="h-12 sm:h-16 md:h-20 object-contain mx-4 opacity-80 hover:opacity-100 transition-opacity"
          />
        ))}
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default Services;
