import React, { useState } from 'react';
import { TrendingUp, Phone, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Investment: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investmentType: '',
    amountRange: '',
    goals: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/investment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result.message);
      alert('Submission successful!');
    } catch (err) {
      console.error('Submission error:', err);
      alert('Submission failed.');
    }
  };

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-16">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Understanding Your Investment Options</h2>
  <p className="text-center text-gray-600 mb-12">
    Explore the basics of Mutual Funds, SIPs, and SWPs to make informed financial decisions.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Mutual Funds */}
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 transition-transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-center mb-4">
        <TrendingUp className="h-10 w-10 text-[#111827]" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Mutual Funds</h3>
      <p className="text-gray-600 text-sm text-center">
        A mutual fund pools money from many investors to invest in diversified portfolios of stocks, bonds, or other assets—managed by professionals to help grow your wealth over time.
      </p>
    </div>

    {/* SIP */}
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 transition-transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-center mb-4">
        <LineChart className="h-10 w-10 text-[#111827]" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Systematic Investment Plan (SIP)</h3>
      <p className="text-gray-600 text-sm text-center">
        SIP allows you to invest small amounts regularly into mutual funds. It's a disciplined approach to investing, benefiting from rupee cost averaging and the power of compounding.
      </p>
    </div>

    {/* SWP */}
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 transition-transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-center mb-4">
        <Phone className="h-10 w-10 text-[#111827]" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Systematic Withdrawal Plan (SWP)</h3>
      <p className="text-gray-600 text-sm text-center">
        SWP allows you to withdraw fixed amounts from your mutual fund investments at regular intervals—ideal for creating a retirement income stream or managing liquidity.
      </p>
    </div>
  </div>
</div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <TrendingUp className="h-12 w-12 text-[#111827] mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Solutions</h1>
            <p className="text-lg text-gray-700">
              Fill out the form below and we'll help you create a personalized investment strategy.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Investment Type</label>
                <select
                  name="investmentType"
                  value={formData.investmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent"
                >
                  <option value="">Select Investment Type</option>
                  <option value="mutual_funds">Mutual Funds</option>
                  <option value="sip">Systematic Investment Plan (SIP)</option>
                  <option value="swp">Systematic Withdrawal Plan (SWP)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Investment Amount Range</label>
                <select
                  name="amountRange"
                  value={formData.amountRange}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent"
                >
                  <option value="">Select Amount Range</option>
                  <option value="500-2k">500 - 2,000</option>
                  <option value="2k-5k">2,000 - 5,000</option>
                  <option value="5k-10k">5,000 - 10,000</option>
                  <option value="10k+">10,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Investment Goals</label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent"
                  placeholder="Please tell us about your investment goals, risk tolerance, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#111827] hover:bg-[#baccd5] text-gray-700 py-3 px-6 rounded-md transition-colors"
              >
                Request Consultation
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-700">"Ready to discuss your investment goals? Let's Talk."</p>
              <button className="mt-4 w-full bg-white border-2 border-[#111827] hover:bg-[#111827] text-gray-700 py-3 px-6 rounded-md transition-colors flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call +91 90048 98714
              </button>

              {/* NEW CALCULATOR BUTTON */}
              <div className="mt-4">
                <button
                  onClick={() => navigate('/calculators')}
                  className="w-full bg-[#111827] hover:bg-[#baccd5] text-gray-700 py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                >
                  <LineChart className="h-5 w-5 mr-2" />
                  Try SIP & SWP Calculators
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
