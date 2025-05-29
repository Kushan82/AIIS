import React, { useState } from 'react';
import { Shield, Phone } from 'lucide-react';
import axios from 'axios';

const Quote: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    insuranceType: '',
    additionalInfo: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/quote', formData);
      alert('Quote submitted successfully!');
    } catch (error: any) {
    console.error('Submission failed:', error.response?.data || error.message);
    alert(`Error: ${error.response?.data?.error || error.message}`);
  }
};

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-[#cddde6] mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Insurance Quote
            </h1>
            <p className="text-lg text-gray-700">
              Fill out the form below and we'll get back to you with a customized quote.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Insurance Type</label>
                <select
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent"
                >
                  <option value="">Select Insurance Type</option>
                  <option value="life">Life Insurance</option>
                  <option value="motor">Motor Insurance</option>
                  <option value="health">Health Insurance</option>
                  <option value="commercial">Commercial Insurance</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent"
                  placeholder="Please provide any additional details that might help us better understand your insurance needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-3 px-6 rounded-md transition-colors"
              >
                Request Quote
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-700">Need immediate assistance?</p>
              <button className="mt-4 w-full bg-white border-2 border-[#cddde6] hover:bg-[#cddde6] text-gray-700 py-3 px-6 rounded-md transition-colors flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call +91 90048 98714
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
