import React from 'react';
import { HeartPulse, Car, Activity, Briefcase, TrendingUp, LineChart, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  const CardContent = () => (
    <>
      <div className="mb-4 text-[#cddde6]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </>
  );

  if (link) {
    return (
      <Link to={link} className="block bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
      <CardContent />
    </div>
  );
};

const Services: React.FC = () => {
  const insuranceServices = [
    {
      icon: <HeartPulse size={28} color='#111827' />,
      title: "Life Insurance",
      description: "Secure your family's financial future with comprehensive life insurance coverage tailored to your needs.",
      link: "/insurance/life"
    },
    {
      icon: <Car size={28} color='#111827' />,
      title: "Motor Insurance",
      description: "Complete protection for your vehicles with comprehensive, third-party liability, and collision coverage.",
      link: "/insurance/motor"
    },
    {
      icon: <Activity size={28} color='#111827' />,
      title: "Health Insurance",
      description: "Quality healthcare coverage with access to top medical facilities and comprehensive wellness benefits.",
      link: "/insurance/health"
    },
    {
      icon: <Briefcase size={28} color='#111827' />,
      title: "Commercial Insurance",
      description: "Protect your business with tailored coverage for property, liability, and business interruption.",
      link: "/insurance/commercial"
    }
  ];

  const investmentServices = [
    {
      icon: <TrendingUp size={28} color='#111827' />,
      title: "Mutual Funds",
      description: "Professionally managed investment portfolios diversified across multiple asset classes for optimal returns.",
      link: "/investment/overview"
    },
    {
      icon: <LineChart size={28} color='#111827' />,
      title: "Systematic Investment Plan (SIP)",
      description: "Regular, disciplined investing through automated monthly contributions to build long-term wealth.",
      link: "/investment/overview"
    },
    {
      icon: <PiggyBank size={28} color='#111827' />,
      title: "Systematic Withdrawal Plan (SWP)",
      description: "Structured withdrawal system providing regular income from your investment portfolio.",
      link: "/investment/overview"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Insurance Services</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Comprehensive coverage options to protect what matters most to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {insuranceServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-20 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Investment Solutions</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Strategic investment options to help you build and manage your wealth effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {investmentServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;