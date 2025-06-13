import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title, rating, image }) => {
  return (
    <div   className="relative bg-gradient-to-br from-indigo-200 via-indigo-100 to-indigo-300 py-20">
      <div className="flex items-center mb-6">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
              />
            ))}
          </div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: 'absolute' as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative' as const,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: 'absolute' as const,
  }),
};

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote:
        "Michael helped me find the perfect home insurance policy that provided excellent coverage while staying within my budget. His knowledge and attention to detail made the process easy and stress-free.",
      name: 'Sarah Johnson',
      title: 'Homeowner',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    },
    {
      quote:
        "As a small business owner, I was overwhelmed by insurance options. Michael took the time to understand my business needs and recommended the perfect coverage. I couldn't be happier with his service.",
      name: 'David Miller',
      title: 'Business Owner',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    {
      quote:
        "After an accident, Michael was there every step of the way during the claims process. His guidance was invaluable, and I'm grateful for his exceptional service and support.",
      name: 'Jennifer Lee',
      title: 'Auto Insurance Client',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
      quote:
        "Michael's expertise in life insurance helped me secure my family's financial future. He explained complex policies in simple terms and found a plan that fit my needs perfectly.",
      name: 'Robert Wilson',
      title: 'Life Insurance Client',
      rating: 4,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
  ];

  const [[currentIndex, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + testimonials.length) % testimonials.length;
      return [newIndex, newDirection];
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-indigo-200 via-indigo-100 to-indigo-300 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with Atharva
            Insurance.
          </p>
        </div>

        <div className="relative h-[300px] md:h-[280px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <TestimonialCard {...testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feedback Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Leave Your Feedback</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <textarea
              rows={4}
              placeholder="Your Feedback"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#cddde6] hover:bg-[#baccd5] text-gray-700 py-3 px-6 rounded-md"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
