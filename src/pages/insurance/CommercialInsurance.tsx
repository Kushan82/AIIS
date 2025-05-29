import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Shield } from 'lucide-react';

const CommercialInsurance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Briefcase className="h-16 w-16 text-[#cddde6] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Commercial Insurance</h1>
            <p className="text-xl text-gray-700">Comprehensive protection for your business assets and operations.</p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protecting Your Business</h2>
              <p className="text-gray-700 mb-6">
                In today's complex business environment, having the right insurance coverage is crucial for protecting 
                your company's assets, employees, and future. Our commercial insurance solutions are designed to 
                address the unique risks faced by businesses of all sizes.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Protection</h3>
                  <p className="text-gray-700">
                    Coverage for your business property, equipment, and inventory against damage or loss.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Liability Coverage</h3>
                  <p className="text-gray-700">
                    Protection against claims of bodily injury, property damage, or professional mistakes.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Interruption</h3>
                  <p className="text-gray-700">
                    Coverage for lost income during temporary closures due to covered events.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Workers' Compensation</h3>
                  <p className="text-gray-700">
                    Protection for employees in case of work-related injuries or illnesses.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coverage Options</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>General Liability Insurance</li>
                <li>Professional Liability Insurance</li>
                <li>Property Insurance</li>
                <li>Workers' Compensation Insurance</li>
                <li>Cyber Liability Insurance</li>
                <li>Commercial Auto Insurance</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our Commercial Coverage?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Customized coverage for your industry
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Risk management expertise
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Dedicated claims support
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Competitive pricing options
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
                Get Your Commercial Insurance Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialInsurance;