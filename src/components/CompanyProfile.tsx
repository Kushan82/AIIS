import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, BarChart2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png?url';

const CompanyProfile: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
<motion.section
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={controls}
  transition={{ duration: 0.8 }}
  className="relative bg-gradient-to-br from-indigo-200 via-indigo-100 to-indigo-300 py-16 px-4 sm:px-6 lg:px-16"
>
  <div className="max-w-7xl mx-auto text-center">
    {/* Logo */}
    <img
      src={logo}
      alt="Atharva Insurance & Investment Solution Logo"
      className="mx-auto mb-8 w-28 sm:w-32 md:w-40 min-w-[80px] rounded-2xl shadow-lg"
    />

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
      About Atharva Insurance & Investment Solutions
    </h2>

    {/* Description */}
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
      With over 20 years of experience in the Insurance and Investment industry,{' '}
      <strong>Atharva Insurance & Investment Solutions</strong> is committed to delivering expert
      guidance, personalized protection, and financial growth opportunities.
    </p>

    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
      We understand that every client has unique needs. Our approach is rooted in trust,
      listening, and deep expertise—helping you navigate potential risks while building a secure
      future tailored to your goals.
    </p>

    {/* Accolades */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
      {[
        {
          icon: <ShieldCheck className="text-[#111827]" />,
          label: 'Licensed Insurance Professional',
        },
        {
          icon: <BarChart2 className="text-[#111827]" />,
          label: 'Experienced Investment Advisor, NISM Certified Mutual Fund Distributor',
        },
        {
          icon: <Users className="text-[#111827]" />,
          label: 'Member, Insurance Professionals Association, AMFI',
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-4 text-left"
        >
          <div className="bg-[#cddde6] p-3 rounded-full">{item.icon}</div>
          <p className="font-medium text-gray-800 text-sm sm:text-base">{item.label}</p>
        </div>
      ))}
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
      <Link
        to="/contact"
        className="bg-[#111827] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#1f2937] transition duration-300 text-center"
      >
        Get in Touch
      </Link>
      <Link
        to="/about"
        className="border border-[#111827] text-[#111827] px-6 py-3 rounded-2xl shadow hover:bg-gray-100 transition duration-300 text-center"
      >
        Learn More
      </Link>
    </div>
  </div>
</motion.section>

  );
};

export default CompanyProfile;
