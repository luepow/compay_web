import React from 'react';
import { Mail, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B1B1B] dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <img 
                src="/logo-full.svg" 
                alt="ComPay" 
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Licensed Money Services Business providing secure, compliant global payment solutions 
              for individuals and businesses worldwide.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Contact Us</h4>
              <a
                href="mailto:support@compay.net"
                className="flex items-center space-x-2 text-[#2BB3E4] hover:text-[#B6DF5A] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>support@compay.net</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#products" className="block text-gray-300 hover:text-[#2BB3E4] transition-colors">Products</a>
              <a href="#business" className="block text-gray-300 hover:text-[#2BB3E4] transition-colors">For Business</a>
              <a href="#compliance" className="block text-gray-300 hover:text-[#2BB3E4] transition-colors">Security</a>
              <a href="https://secure.compay.net/fees" className="block text-gray-300 hover:text-[#2BB3E4] transition-colors">Fees</a>
            </nav>
          </div>

          {/* Portal & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-4">Secure Portal</h4>
              <a
                href="https://secure.compay.net"
                className="group inline-flex items-center bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Enter Portal</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#2BB3E4] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#2BB3E4] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#2BB3E4] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 ComPay. All rights reserved. MSB Licensed in Florida.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="https://secure.compay.net/terms" className="text-gray-400 hover:text-[#2BB3E4] transition-colors">Terms</a>
              <a href="https://secure.compay.net/privacy" className="text-gray-400 hover:text-[#2BB3E4] transition-colors">Privacy</a>
              <a href="https://secure.compay.net/fees" className="text-gray-400 hover:text-[#2BB3E4] transition-colors">Fees</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;