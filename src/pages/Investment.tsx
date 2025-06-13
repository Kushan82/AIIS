import React, { useState } from 'react';
import { TrendingUp, Phone, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'; // ✅ make sure it's @emailjs/browser
import whatsappIcon from '../assets/whatsapp-icon.png';
import { Player } from '@lottiefiles/react-lottie-player';

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

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);
  setMessage(null);

  try {
    await emailjs.send(
      'service_zn1mv79',         // e.g., 'service_abc123'
      'template_mhos3ye',        // e.g., 'template_xyz456'
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        investmentType: formData.investmentType,
        amountRange: formData.amountRange,
        goals: formData.goals,
      },
      'N8NbdxBb0CgzKJVCL'          // e.g., 'Jg5abcDEFghIJkl'
    );
      alert('Thank you! Atharva Insurance will reach out to you shortly through Email or WhatsApp.');

    setMessage({ type: 'success', text: 'Email sent successfully!' });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      investmentType: '',
      amountRange: '',
      goals: '',
    });
  } catch (err) {
    console.error('EmailJS Error:', err);
    setMessage({ type: 'error', text: 'Failed to send email. Please try again.' });
  } finally {
    setSubmitting(false);
  }
};

<Player
  autoplay
  loop
  src="https://lottie.host/eac5e66c-c61d-49d6-be39-7376040d806f/1VyuJ4AFox.lottie"
  style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }}
/>


  return (
    <section className="relative bg-gradient-to-br from-indigo-200 via-indigo-100 to-indigo-300 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* EDUCATIONAL SECTION */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Understanding Your Investment Options</h2>
          <p className="text-center text-gray-600 mb-12">
            Explore the basics of Mutual Funds, SIPs, and SWPs to make informed financial decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-10 w-10 text-[#111827]" />,
                title: 'Mutual Funds',
                description:
                  'A mutual fund pools money from many investors to invest in diversified portfolios of stocks, bonds, or other assets—managed by professionals to help grow your wealth over time.',
              },
              {
                icon: <LineChart className="h-10 w-10 text-[#111827]" />,
                title: 'Systematic Investment Plan (SIP)',
                description:
                  'SIP allows you to invest small amounts regularly into mutual funds. It’s a disciplined approach to investing, benefiting from rupee cost averaging and the power of compounding.',
              },
              {
                icon: <Phone className="h-10 w-10 text-[#111827]" />,
                title: 'Systematic Withdrawal Plan (SWP)',
                description:
                  'SWP allows you to withdraw fixed amounts from your mutual fund investments at regular intervals—ideal for creating a retirement income stream or managing liquidity.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 transition-transform hover:scale-105 hover:shadow-xl">
                <div className="flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FORM SECTION */}
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
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827]"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Investment Type</label>
                <select
                  name="investmentType"
                  value={formData.investmentType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827]"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827]"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111827]"
                  placeholder="Tell us about your investment goals, risk tolerance, and preferences..."
                />
              </div>

              {message && (
                <div className={`text-center text-sm font-medium ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#111827] hover:bg-[#baccd5] text-white py-3 px-6 rounded-md transition-colors disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Request Consultation'}
              </button>
            </form>

            {/* Bottom CTA Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-700 mb-4">"Ready to discuss your investment goals? Let's Talk."</p>

              <button className="w-full bg-[#111827] hover:bg-[#baccd5] text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center mb-3">
                <Phone className="h-5 w-5 mr-2" />
                Call +91 90048 98714
              </button>
<a className='mt-4 w-full flex justify-center items-center gap-2'>OR</a>
              <button
  onClick={() => {
    const message = `Hi, I would like to inquire about a Mutual Fund investment plan.%0A
Here are my details:%0A
*Full Name:* ${formData.firstName} ${formData.lastName}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Investment Type:* ${formData.investmentType}%0A
*Investment Amount Range:* ${formData.amountRange}%0A
*Goals:* ${formData.goals }`;

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

export default Investment;
