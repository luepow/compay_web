import React from 'react';
import { Shield, Lock, Search, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'AML Compliance',
    description: 'Anti-Money Laundering policies and monitoring'
  },
  {
    icon: FileCheck,
    title: 'KYC Verification',
    description: 'Know Your Customer identity verification processes'
  },
  {
    icon: Search,
    title: 'OFAC Screening',
    description: 'Sanctions list screening and compliance monitoring'
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'End-to-end encryption in transit and at rest'
  }
];

const Compliance: React.FC = () => {
  return (
    <section id="compliance" className="py-20 bg-[#F7F9FB] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B1B1B] dark:text-white mb-6">
            Compliance & Security
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We comply with AML/KYC policies, transaction monitoring, sanctions list screening (OFAC), 
            and risk controls. Encryption in transit and at rest protects your data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <feature.icon className="w-10 h-10 text-[#2F80ED]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1B1B1B] dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security Statement */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-[#1B1B1B] dark:text-white text-center mb-4">
            Bank-Level Security
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            Your financial data is protected with the same security standards used by major financial institutions. 
            We employ multi-layer security protocols, regular security audits, and strict access controls.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Compliance;