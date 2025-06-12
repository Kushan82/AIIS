import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CompanyProfile from '../components/CompanyProfile';

const Home: React.FC = () => {
  return (
    <div className="transform scale-[0.9] md:scale-100 origin-top px-2">
      <Hero />
      <CompanyProfile />
      <Services />
    </div>
  );
};

export default Home;
