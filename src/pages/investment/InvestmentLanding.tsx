import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, LineChart, PiggyBank, Shield } from 'lucide-react';

const InvestmentLanding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <TrendingUp className="h-16 w-16 text-[#111827] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Investment Solutions</h1>
            <p className="text-xl text-gray-700">Build and grow your wealth with our comprehensive investment options.</p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-[#111827] mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-900">Mutual Funds</h2>
                </div>
                <p className="font-semibold text-gray-900 mb-2">
                  Grow Your Wealth Without Lifting a Finger</p>
                <p className="text-gray-700 mb-6">
                Mutual funds let experts grow your money by investing in a basket of stocks and bonds—giving you instant diversification and professional management.


                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Management</h3>
                    <p className="text-gray-700">
                      Expert fund managers make investment decisions based on thorough research and market analysis.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Diversified Portfolio</h3>
                    <p className="text-gray-700">
                      Spread risk across multiple securities and sectors to maximize returns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <LineChart className="h-8 w-8 text-[#111827] mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-900">Systematic Investment Plan (SIP)</h2>
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-2">
                  Turn Small Steps Into Big Wealth
                </p>
                <p className='text-gray-700 mb-6'>
                SIPs help you invest small amounts regularly and build wealth over time—thanks to the magic of compounding and disciplined investing.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of SIP</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-[#111827] mr-2" />
                      Rupee cost averaging- Ride out market ups and downs 
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-[#111827] mr-2" />
                      Power of compounding-Automate your wealth-building journey
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-[#111827] mr-2" />
                      Flexible investment amounts-Start with as little as ₹500
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <PiggyBank className="h-8 w-8 text-[#111827] mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-900">Systematic Withdrawal Plan (SWP)</h2>
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-2">
                  Enjoy Regular Income Without Killing Your Investment</p>
                <p className='text-gray-700 mb-6'>
                SWP gives you the freedom to withdraw money from your fund regularly—while your remaining investment continues to grow.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Steady Payouts</h3>
                    <p className="text-gray-700">
                      Create a predictable income stream while maintaining long-term investment growth.</p>
                      <p className='text-gray-700'>
                      Get monthly income like a salary
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexibility</h3>
                    <p className="text-gray-700">
                      Choose your withdrawal amount and frequency based on your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <button
                onClick={() => navigate('/investment')}
                className="bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-3 px-8 rounded-md transition-colors inline-flex items-center"
              >
                <Shield className="h-5 w-5 mr-2" />
                Start Your Investment Journey
              </button>

              <br />

              <button
                onClick={() => navigate('/calculators')}
                className="bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-3 px-8 rounded-md transition-colors inline-flex items-center"
              >
                <LineChart className="h-5 w-5 mr-2" />
                Try SIP & SWP Calculators
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentLanding;