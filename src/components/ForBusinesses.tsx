import React from 'react';
import { ArrowRight, Code, Webhook, BarChart, Users, Key, FileText } from 'lucide-react';

const features = [
  { icon: Code, text: 'REST API' },
  { icon: Webhook, text: 'Webhooks' },
  { icon: BarChart, text: 'Dashboard' },
  { icon: FileText, text: 'Reports' },
  { icon: Users, text: 'Permissions & Roles' },
  { icon: Key, text: 'API Keys' }
];

const ForBusinesses: React.FC = () => {
  return (
    <section id="business" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1B1B1B] dark:text-white mb-6">
                For Businesses
              </h2>
              <h3 className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
                Integrate payments and reconciliation into your system
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-[#F7F9FB] dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  <feature.icon className="w-6 h-6 text-[#2F80ED]" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Build powerful financial applications with our comprehensive API suite. 
                Handle payments, transfers, and reconciliation with enterprise-grade reliability.
              </p>
              
              <a
                href="mailto:support@compay.net?subject=Sales Inquiry"
                className="group inline-flex items-center bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <span>Talk to Sales</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-[#1B1B1B] dark:bg-gray-900 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">API Example</span>
            </div>
            
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`curl -X POST https://api.compay.net/v1/transfers \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000.00,
    "currency": "USD",
    "recipient": {
      "email": "recipient@example.com",
      "country": "MX"
    },
    "purpose": "family_support"
  }'`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;