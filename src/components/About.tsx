import React from 'react';
import { Award, Clock, UserCheck, Users } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, number, label }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center text-[#cddde6] mb-2">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900">{number}</div>
      <div className="text-gray-700">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Insurance Agent" 
              className="rounded-lg shadow-lg w-full object-cover h-[400px]" 
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Atharva Insurance & Investment Solutions</h2>
            <p className="text-gray-700 mb-4">
              With over 20 years of experience in the insurance industry, I specialize in creating personalized 
              insurance solutions that provide my clients with the protection and peace of mind they deserve.
            </p>
            <p className="text-gray-700 mb-6">
              My approach is simple: understand your unique needs, identify potential risks, and design a 
              comprehensive insurance plan that addresses your specific concerns while staying within your budget.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <Award className="h-5 w-5 text-[#cddde6] mr-2" />
                <span className="text-gray-900 font-medium">Licensed Insurance Professional</span>
              </div>
              <div className="flex items-center mb-2">
                <UserCheck className="h-5 w-5 text-[#cddde6] mr-2" />
                <span className="text-gray-900 font-medium">Experienced Investment Advisor</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-[#cddde6] mr-2" />
                <span className="text-gray-900 font-medium">Member of Insurance Professionals Association</span>
              </div>
            </div>
            
            <button className="bg-transparent border border-[#cddde6] text-gray-700 hover:bg-[#cddde6] hover:text-gray-700 py-2 px-6 rounded-md transition-colors">
              Learn More About Me
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat 
            icon={<Clock size={28} />}
            number="20+"
            label="Years Experience"
          />
          <Stat 
            icon={<Users size={28} />}
            number="1,500+"
            label="Clients Served"
          />
          <Stat 
            icon={<Award size={28} />}
            number="High"
            label="Client Satisfaction"
          />
          <Stat 
            icon={<UserCheck size={28} />}
            number="10Cr"
            label="Claims Handled"
          />
        </div>
      </div>
    </section>
  );
};

export default About;