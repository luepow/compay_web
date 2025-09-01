import React from 'react';
import { FileText, Shield, AlertCircle } from 'lucide-react';

const Licenses: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F9FB] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B1B1B] dark:text-white mb-6">
            Licenses & Legal Notices
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* MSB License */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1B1B1B] dark:text-white mb-3">
                  Money Services Business License
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  ComPay is a Money Services Business (MSB) registered in Florida.{' '}
                  <strong>License ID: To be defined</strong>. Services may be subject to regional restrictions.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">
                  Important Legal Notice
                </h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                  ComPay services are regulated financial services. All transactions are subject to AML/KYC 
                  verification and compliance requirements. Not all services are available in all jurisdictions.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-4 mb-6">
              <FileText className="w-8 h-8 text-[#2F80ED]" />
              <h3 className="text-xl font-semibold text-[#1B1B1B] dark:text-white">
                Legal Documentation
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://secure.compay.net/terms"
                className="flex items-center justify-center px-6 py-3 bg-[#F7F9FB] dark:bg-gray-700 rounded-xl text-[#2F80ED] hover:text-[#2BB3E4] font-medium transition-colors hover:shadow-md"
              >
                Terms of Service
              </a>
              <a
                href="https://secure.compay.net/privacy"
                className="flex items-center justify-center px-6 py-3 bg-[#F7F9FB] dark:bg-gray-700 rounded-xl text-[#2F80ED] hover:text-[#2BB3E4] font-medium transition-colors hover:shadow-md"
              >
                Privacy Policy
              </a>
              <a
                href="https://secure.compay.net/fees"
                className="flex items-center justify-center px-6 py-3 bg-[#F7F9FB] dark:bg-gray-700 rounded-xl text-[#2F80ED] hover:text-[#2BB3E4] font-medium transition-colors hover:shadow-md"
              >
                Fee Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Licenses;