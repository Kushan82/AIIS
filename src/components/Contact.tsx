import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { supabase } from 'C:/Users/itzku/Desktop/website/project/src/components/supabaseClient.tsx'; // Adjust path if needed
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import whatsappIcon from '../assets/whatsapp-icon.png';
import logo from '../assets/logo.png';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const file = formData.get('previous_policy') as File;
    let fileUrl = '';

if (file && file.name) {
  const { data, error } = await supabase.storage
    .from('attachments')
    .upload(`policies/${Date.now()}-${file.name}`, file);

  if (error) {
    console.error("Upload error:", error);
    alert("Failed to upload file.");
    return;
  }

  const publicUrlResponse = supabase.storage
    .from("attachments")
    .getPublicUrl(data.path);

  if (!publicUrlResponse || !publicUrlResponse.data?.publicUrl) {
    console.error("Error getting public URL.");
    alert("Failed to get public URL for uploaded file.");
    return;
  }

  fileUrl = publicUrlResponse.data.publicUrl;
}

    const templateParams = {
  user_name: formData.get('user_name'),
  user_email: formData.get('user_email'),
  user_phone: formData.get('user_phone'),
  message: formData.get('message'),
  claims_made: formData.get('claims_made'),
  previous_policy_link: fileUrl || '', // ✅ this must be the Supabase public URL
};
console.log("Template Params:", templateParams);
console.log("Claims Made Value:", formData.get('claims_made'));

    emailjs.send(
        'service_wg58sck',
        'template_p9plzoj',
        templateParams,
        'sBiVVAiF4_cUXw5Hm'
      )
      .then(() => {
        alert('Message sent successfully!');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send the message. Please try again later.');
      });
  };
const [isExpanded, setIsExpanded] = useState(false);
const [canExpandAgain, setCanExpandAgain] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsExpanded(true);
    setCanExpandAgain(true);
  }, 2000);
  return () => clearTimeout(timer);
}, []);



  return (
   <section
  id="contact"
  className="relative bg-gradient-to-br from-indigo-200 via-indigo-100 to-indigo-300 py-20"
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Have questions about insurance coverage? Ready to get a quote? I'm here to help.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Form */}
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200">
<h3 className="text-xl font-semibold text-[#111827] mb-6">Send a Message</h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-4" encType="multipart/form-data">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="user_phone"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <div>
            <label htmlFor="previous_policy" className="block text-sm text-gray-700 mb-1">Attach Previous Policy (optional)</label>
            <input
              type="file"
              name="previous_policy"
              id="previous_policy"
              className="block w-full text-gray-700"
            />
          </div>

          <div>
            <span className="block text-sm text-gray-700 mb-1">Claims made in previous policy?</span>
            <div className="flex gap-6">
              <label className="flex items-center space-x-2 text-gray-700">
                <input type="radio" name="claims_made" value="Yes" className="accent-indigo-500" required />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2 text-gray-700">
                <input type="radio" name="claims_made" value="No" className="accent-indigo-500" />
                <span>No</span>
              </label>
            </div>
          </div>

         <button
  type="submit"
  className="w-full bg-[#111827] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#1f2937] transition duration-300 text-center"
>
  Send Message
</button>


          <div className="text-center text-gray-500 mt-4">OR</div>

        </form>
      </div>

      {/* Contact Info */}
      <div className="space-y-8">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 text-gray-800">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-indigo-500" />
              <div>
                <p className="font-medium">Phone</p>
                <p>+91 90048 98714</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-indigo-500" />
              <div>
                <p className="font-medium">Email</p>
                <p>atharvainsurance@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-indigo-500" />
              <div>
                <p className="font-medium">Office</p>
                <p>30 SARASWATI BHAVAN, OPP GANAJAWALA</p>
                <p>BORIWALI (WEST), MUMBAI 400091</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-indigo-500" />
              <div>
                <p className="font-medium">Business Hours</p>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Weekends: By appointment only</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Get a Quick Quote</h3>
          <p className="text-gray-700 mb-6">
            Need a quick estimate? Call directly for an immediate quote on any insurance product.
          </p>
          <button className="w-full bg-[#111827] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#1f2937] transition duration-300 flex items-center justify-center text-center">
  <Phone className="h-5 w-5 mr-2" />
  Call for a Quote - +91 90048 98714
</button>

{/* Floating WhatsApp Widget */}
<div
  className="fixed bottom-6 right-6 z-50"
  onMouseEnter={() => {
    if (!isExpanded && canExpandAgain) {
      setIsExpanded(true);
    }
  }}
>
  <div
  className={`transition-all duration-500 ease-in-out ${
    isExpanded
      ? 'w-80 rounded-xl shadow-xl overflow-hidden bg-white'
      : 'w-16 h-16'
  }`}
>    {isExpanded ? (
      <div className="rounded-xl border border-gray-200">
        {/* Header */}
        <div className="bg-green-500 text-white text-center py-3 flex items-center justify-center gap-2">
          <img src={logo} alt="Logo" className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center gap-2" />
          <span className="font-semibold flex items-center justify-center gap-2">Welcome To Aiis</span>
        </div>

        {/* Profile Info */}
        <div className="p-4 flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-14 h-14 rounded-full border border-gray-300" />
          <div>
            <p className="text-sm text-gray-600">Insurance & Financial Advisor</p>
            <p className="font-semibold text-gray-800">Atharva Insurance & Investment Solutions</p>
            <div className="flex items-center text-green-600 text-xs mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Online
            </div>
          </div>
        </div>

        {/* Action Button */}
        <a
          href="https://wa.me/919029061542?text=Hi%20Atharva%20Insurance%2C%20I%20would%20like%20to%20inquire%20about%20an%20insurance%20policy."
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-100 text-green-800 text-center py-2 font-medium hover:bg-green-200 transition"
        >
          Chat on WhatsApp
        </a>

        {/* Close Button */}
        <button
          onClick={() => {
            setIsExpanded(false);
            setCanExpandAgain(false);
            setTimeout(() => setCanExpandAgain(true), 3000);
          }}
          className="absolute top-1 right-1 text-white bg-green-500 hover:bg-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm"
        >
          ✕
        </button>
      </div>
    ) : (
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
        <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
      </div>
    )}
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
