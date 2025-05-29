import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_wg58sck',     // Replace with your EmailJS service ID
      'template_p9plzoj',    // Replace with your EmailJS template ID
      form.current,
      'sBiVVAiF4_cUXw5Hm'      // Replace with your EmailJS public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current?.reset();
      },
      (error) => {
        alert('Failed to send the message. Please try again later.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Have questions about insurance coverage? Ready to get a quote? I'm here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FORM PART */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent" 
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent" 
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  name="user_phone"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent" 
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cddde6] focus:border-transparent" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-3 px-6 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO - UNTOUCHED */}
          <div>
            <div className="bg-[#cddde6] p-8 rounded-lg shadow-md text-gray-700 mb-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+91 90048 98714</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>atharvainsurance@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p>30 SARASWATI BHAVAN,OPP GANAJAWALA</p>
                    <p>BORIWALI(wEST),MUMBAI 400091</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Weekends: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get a Quick Quote</h3>
              <p className="text-gray-700 mb-6">
                Need a quick estimate? Call directly for an immediate quote on any insurance product.
              </p>
              <button className="w-full bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-3 px-6 rounded-md transition-colors flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call for a Quote - +91 90048 98714
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
