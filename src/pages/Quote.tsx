import React, { useState } from 'react';
import { Shield, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser'; // ✅ make sure it's @emailjs/browser
import whatsappIcon from '../assets/whatsapp-icon.png';
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
      const emailParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        user_email: formData.email,
        phone: formData.phone,
        insurance_type: formData.insuranceType,
        additional_info: formData.additionalInfo,
      };

      await emailjs.send(
        'service_wg58sck',       // Replace with your actual EmailJS Service ID
        'template_enm78vd',      // Replace with your actual Template ID
        emailParams,
        'sBiVVAiF4_cUXw5Hm'      // Replace with your actual Public Key
      );

      alert('Thank you! Atharva Insurance will reach out to you shortly through Email or WhatsApp.');

      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        insuranceType: '',
        additionalInfo: '',
      });
    } catch (error: any) {
      console.error('Email sending failed:', error);
      alert(`Error: ${error.message || 'Email sending failed'}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-200 via-indigo-100 to-indigo-300 py-20 overflow-hidden">
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
                            <a className='mt-4 w-full flex justify-center items-center gap-2'>OR</a>
              <button
  onClick={() => {
    const message = `Hi, I would like to inquire about an insurance policy.%0A
    Here are my details:%0A
*First Name:* ${formData.firstName}%0A
*Last Name:* ${formData.lastName}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Insurance Type(Health Insurance, Motor Insurance, Commercial Insurance):* ${formData.insuranceType}%0A
*Kindly attach previous policy:* ${formData.additionalInfo }`;

    const whatsappURL = `https://wa.me/919004898714?text=${message}`;
    window.open(whatsappURL, '_blank');
  }}
  className="mt-4 w-full flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition-colors"
>
  <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
  Chat on WhatsApp
</button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
