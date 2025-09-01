import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingContact: React.FC = () => {
  return (
    <a
      href="mailto:support@compay.net?subject=Customer Inquiry"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-200 group"
      title="Contact Support"
    >
      <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default FloatingContact;