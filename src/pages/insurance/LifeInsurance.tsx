import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, Shield } from 'lucide-react';

const LifeInsurance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HeartPulse className="h-16 w-16 text-[#cddde6] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Life Insurance</h1>
            <p className="text-xl text-gray-700">Secure your family's future with comprehensive life insurance coverage.</p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Life Insurance?</h2>
              <p className="text-gray-700 mb-6">
                Life insurance is more than just a policy – it's a promise to protect your loved ones' financial future. 
                It provides peace of mind knowing that your family will be taken care of, even when you're no longer there 
                to provide for them.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Security</h3>
                  <p className="text-gray-700">
                    Ensures your family maintains their standard of living and can meet financial obligations in your absence.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Debt Coverage</h3>
                  <p className="text-gray-700">
                    Helps cover outstanding debts, mortgages, and loans, preventing financial burden on your family.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Education Planning</h3>
                  <p className="text-gray-700">
                    Secures your children's educational future, ensuring they can pursue their dreams.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Estate Planning</h3>
                  <p className="text-gray-700">
                    Helps with estate planning and can provide tax benefits for your beneficiaries.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Life Insurance Solutions</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Term Life Insurance</li>
                <li>Whole Life Insurance</li>
                <li>Universal Life Insurance</li>
                <li>Variable Life Insurance</li>
                <li>Final Expense Insurance</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Customized coverage options tailored to your needs
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Expert guidance throughout the application process
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Competitive rates from top-rated insurance providers
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#cddde6] mr-2" />
                    Fast and efficient claims processing
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
                Get Your Life Insurance Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeInsurance;