import React, { useState } from 'react';
import { X, User, Mail, Globe, Building } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    type: 'personal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll contact you soon.');
    onClose();
    setFormData({ name: '', email: '', country: '', type: 'personal' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#1B1B1B] dark:text-white">Open Account</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Start your ComPay journey</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#2BB3E4] focus:border-transparent bg-white dark:bg-gray-700 text-[#1B1B1B] dark:text-white transition-colors"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#2BB3E4] focus:border-transparent bg-white dark:bg-gray-700 text-[#1B1B1B] dark:text-white transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Country
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#2BB3E4] focus:border-transparent bg-white dark:bg-gray-700 text-[#1B1B1B] dark:text-white transition-colors appearance-none"
              >
                <option value="">Select your country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="MX">Mexico</option>
                <option value="GB">United Kingdom</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="ES">Spain</option>
                <option value="BR">Brazil</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Account Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Account Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center space-x-3 p-4 border border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer hover:border-[#2BB3E4] transition-colors">
                <input
                  type="radio"
                  name="type"
                  value="personal"
                  checked={formData.type === 'personal'}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="text-[#2BB3E4]"
                />
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">Personal</span>
              </label>
              
              <label className="flex items-center space-x-3 p-4 border border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer hover:border-[#2BB3E4] transition-colors">
                <input
                  type="radio"
                  name="type"
                  value="business"
                  checked={formData.type === 'business'}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="text-[#2BB3E4]"
                />
                <Building className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">Business</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Submit Application
          </button>

          <p className="text-gray-500 dark:text-gray-400 text-xs text-center">
            By submitting, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadModal;