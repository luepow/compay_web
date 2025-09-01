import React from 'react';
import { UserPlus, Shield, CreditCard, Send } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up with your basic information in just a few minutes'
  },
  {
    icon: Shield,
    title: 'Verify Identity (KYC)',
    description: 'Complete our secure identity verification process'
  },
  {
    icon: CreditCard,
    title: 'Fund / Link Accounts',
    description: 'Add funds or connect your existing bank accounts'
  },
  {
    icon: Send,
    title: 'Send, Pay & Reconcile',
    description: 'Make global payments with real-time tracking and reconciliation'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B1B1B] dark:text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get started with ComPay in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-[#F7F9FB] dark:bg-gray-700 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6 mt-4">
                <div className="w-16 h-16 bg-white dark:bg-gray-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <step.icon className="w-8 h-8 text-[#2F80ED]" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#1B1B1B] dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;