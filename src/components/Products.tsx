import React from 'react';
import { Wallet, Globe, Store, Users, Zap, Code } from 'lucide-react';

const products = [
  {
    icon: Wallet,
    title: 'Multi-Currency Wallet',
    description: 'Hold and manage multiple currencies in one secure digital wallet',
    link: 'https://secure.compay.net'
  },
  {
    icon: Globe,
    title: 'International Transfers',
    description: 'Send money worldwide with competitive rates and fast delivery',
    link: 'https://secure.compay.net'
  },
  {
    icon: Store,
    title: 'Merchant Payments',
    description: 'Accept payments from customers globally with easy integration',
    link: 'https://secure.compay.net'
  },
  {
    icon: Users,
    title: 'Remittances',
    description: 'Family remittances with low fees and reliable delivery',
    link: 'https://secure.compay.net'
  },
  {
    icon: Zap,
    title: 'Bulk Payments',
    description: 'Process multiple payments efficiently with batch operations',
    link: 'https://secure.compay.net'
  },
  {
    icon: Code,
    title: 'Business API',
    description: 'Integrate payments into your systems with our robust API',
    link: 'https://secure.compay.net'
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-[#F7F9FB] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B1B1B] dark:text-white mb-6">
            Products & Accounts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive financial solutions for individuals and businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#B6DF5A]/20 to-[#2BB3E4]/20 rounded-2xl flex items-center justify-center group-hover:from-[#B6DF5A]/30 group-hover:to-[#2BB3E4]/30 transition-all">
                  <product.icon className="w-8 h-8 text-[#2F80ED]" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#1B1B1B] dark:text-white mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Link */}
              <a
                href={product.link}
                className="inline-flex items-center text-[#2BB3E4] hover:text-[#2F80ED] font-medium transition-colors group"
              >
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;