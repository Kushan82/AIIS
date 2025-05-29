import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Shield } from 'lucide-react';

const HealthInsurance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Activity className="h-16 w-16 text-[#cddde6] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Insurance</h1>
            <p className="text-xl text-gray-700">Comprehensive healthcare coverage for you and your family.</p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Health Insurance Matters</h2>
              <p className="text-gray-700 mb-6">
                Health insurance is essential for protecting both your well-being and your finances. With rising healthcare 
                costs, having the right coverage ensures you can access quality medical care without the burden of 
                excessive expenses.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Care</h3>
                  <p className="text-gray-700">
                    Access to regular check-ups and screenings to maintain your health and catch issues early.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Coverage</h3>
                  <p className="text-gray-700">
                    Protection against unexpected medical emergencies and associated costs.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Prescription Benefits</h3>
                  <p className="text-gray-700">
                    Coverage for necessary medications and treatments prescribed by your healthcare providers.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialist Care</h3>
                  <p className="text-gray-700">
                    Access to a network of specialists and healthcare professionals for comprehensive care.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Health Insurance Plans</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Individual Health Plans</li>
                <li>Family Coverage</li>
                <li>Medicare Supplement Insurance</li>
                <li>Group Health Insurance</li>
                <li>Dental and Vision Coverage</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of Our Health Coverage</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Wide network of healthcare providers
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Flexible deductible options
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Comprehensive prescription drug coverage
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    24/7 telehealth services
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
                Get Your Health Insurance Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInsurance;