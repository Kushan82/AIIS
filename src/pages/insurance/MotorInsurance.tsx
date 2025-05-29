import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Shield } from 'lucide-react';

const MotorInsurance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Car className="h-16 w-16 text-[#cddde6] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Motor Insurance</h1>
            <p className="text-xl text-gray-700">Comprehensive protection for your vehicles on and off the road.</p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complete Vehicle Protection</h2>
              <p className="text-gray-700 mb-6">
                Our motor insurance policies provide comprehensive coverage to protect your vehicle against accidents, 
                theft, and damage. Whether you're driving a car, motorcycle, or commercial vehicle, we have the right 
                coverage for your needs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Collision Coverage</h3>
                  <p className="text-gray-700">
                    Protection against damage to your vehicle in accidents, regardless of fault.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Liability Protection</h3>
                  <p className="text-gray-700">
                    Coverage for damage or injury you may cause to others while driving.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Coverage</h3>
                  <p className="text-gray-700">
                    Protection against theft, vandalism, natural disasters, and other non-collision incidents.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Injury Protection</h3>
                  <p className="text-gray-700">
                    Coverage for medical expenses and lost wages resulting from an accident.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Available Coverage Options</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Personal Auto Insurance</li>
                <li>Commercial Vehicle Insurance</li>
                <li>Motorcycle Insurance</li>
                <li>Classic Car Insurance</li>
                <li>Fleet Insurance</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    24/7 roadside assistance
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Rental car coverage
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Fast claims processing
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Flexible payment options
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate('/quote')}
                className="bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-3 px-8 rounded-md transition-colors inline-flex items-center"
              >
                <Shield className="h-5 w-5 mr-2" />
                Get Your Motor Insurance Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotorInsurance;