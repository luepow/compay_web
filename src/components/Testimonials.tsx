import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ComPay made international payments simple for our business. Fast, secure, and reliable.",
    initials: "M.R.",
    country: "United States",
    rating: 5
  },
  {
    quote: "Finally, a payment service that understands compliance. Their KYC process is thorough yet smooth.",
    initials: "A.S.",
    country: "Canada",
    rating: 5
  },
  {
    quote: "The API integration was seamless. Our reconciliation process is now automated and accurate.",
    initials: "L.G.",
    country: "Mexico",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F9FB] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B1B1B] dark:text-white mb-6">
            Trusted Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See what our customers say about ComPay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B6DF5A] text-[#B6DF5A]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-medium text-[#1B1B1B] dark:text-white">{testimonial.initials}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;